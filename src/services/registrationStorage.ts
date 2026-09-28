export interface StoredRegistration {
  id: string;
  orgType: string;
  roleCategory: 'Provider' | 'Receiver';
  orgName: string;
  ownerName: string;
  contactNumber: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  location: string;
  govRegNumber: string;
  proofFileName?: string;
  fpuType?: string;
  productCategory?: string;
  industryType?: string;
  materialRequired?: string;
  status: 'PENDING' | 'VERIFIED' | 'REJECTED';
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  rejectionReason?: string;
  notification?: string;
}

export const determineRoleCategory = (orgType: string): 'Provider' | 'Receiver' => {
  if (orgType === 'INSTITUTIONAL KITCHEN' || orgType === 'FOOD PROCESSING UNIT') {
    return 'Provider';
  }
  return 'Receiver';
};

const STORAGE_KEY = 'w2v_registered_organizations';

export const getStoredRegistrations = (): StoredRegistration[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Check legacy key if any
      const legacyRaw = localStorage.getItem('w2v_pending_registrations');
      if (legacyRaw) {
        const legacyList = JSON.parse(legacyRaw);
        const mapped: StoredRegistration[] = legacyList.map((item: any, idx: number) => ({
          ...item,
          id: item.id || `reg-${Date.now()}-${idx}`,
          roleCategory: item.roleCategory || determineRoleCategory(item.orgType),
          status: item.status || 'PENDING',
        }));
        saveRegistrations(mapped);
        return mapped;
      }
      return [];
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveRegistrations = (list: StoredRegistration[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    // also sync back to w2v_pending_registrations for backwards compatibility
    localStorage.setItem('w2v_pending_registrations', JSON.stringify(list));
  } catch (err) {
    console.error('Error saving registrations to storage', err);
  }
};

export const findRegistrationByEmail = (email: string): StoredRegistration | undefined => {
  const all = getStoredRegistrations();
  const normalized = email.trim().toLowerCase();
  return all.find((r) => r.email.trim().toLowerCase() === normalized);
};

export const updateRegistrationPassword = (email: string, newPassword: string): boolean => {
  const all = getStoredRegistrations();
  const normalized = email.trim().toLowerCase();
  const index = all.findIndex((r) => r.email.trim().toLowerCase() === normalized);
  if (index === -1) return false;

  all[index].password = newPassword;
  all[index].confirmPassword = newPassword;
  saveRegistrations(all);
  return true;
};

export const approveRegistration = (id: string, adminEmail: string): StoredRegistration | null => {
  const all = getStoredRegistrations();
  const index = all.findIndex((r) => r.id === id);
  if (index === -1) return null;

  const updated: StoredRegistration = {
    ...all[index],
    status: 'VERIFIED',
    reviewedAt: new Date().toISOString(),
    reviewedBy: adminEmail,
    notification: 'Your W2V registration has been approved. You can now log in to your account.',
  };

  all[index] = updated;
  saveRegistrations(all);
  return updated;
};

export const rejectRegistration = (
  id: string,
  adminEmail: string,
  reason: string
): StoredRegistration | null => {
  const all = getStoredRegistrations();
  const index = all.findIndex((r) => r.id === id);
  if (index === -1) return null;

  const updated: StoredRegistration = {
    ...all[index],
    status: 'REJECTED',
    reviewedAt: new Date().toISOString(),
    reviewedBy: adminEmail,
    rejectionReason: reason,
    notification:
      'Your W2V registration was not approved. Please check the rejection reason or contact W2V support.',
  };

  all[index] = updated;
  saveRegistrations(all);
  return updated;
};
