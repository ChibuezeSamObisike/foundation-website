export interface EventSponsorshipFormData {
  // Section A: Event Details
  eventName: string;
  eventTheme?: string;
  eventTypes: string[];
  otherEventType?: string;
  eventDate: Date;
  eventTime: string;
  venue: string;
  targetAudience: string;
  numAttendees: number;

  // Section B: Organizer Information
  organizerName: string;
  contactPerson: string;
  phoneWhatsApp: string;
  email: string;
  socialMedia?: string;
  organizedBefore: "yes" | "no";
  previousEvents?: string;

  // Section C: Event Impact & Purpose
  coreObjective: string;
  impact: string;
  speakers: string;

  // Section D: Sponsorship & Visibility
  supportRequested: string[];
  otherSupport?: string;

  // Section E: Additional Notes
  proposalLink?: string;
  additionalComments?: string;
}
export interface EventSponsorshipApplication extends EventSponsorshipFormData {
  id: string;
  submittedAt: Date;
  status: "pending" | "approved" | "rejected";
}

export interface SpeakerEngagementFormData {
  organisationName: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
  eventTitle: string;
  eventTypes: string[];
  otherEventType?: string;
  eventDate: Date;
  eventTime: string;
  eventVenue: string;
  speakingRoles: string[];
  topicFocusArea: string;
  expectedAudience: string;
  sessionObjectives: string;
  additionalInformation?: string;
}

export interface SpeakerEngagementRequest extends SpeakerEngagementFormData {
  id: string;
  submittedAt: Date;
  status: "pending" | "approved" | "rejected";
}
