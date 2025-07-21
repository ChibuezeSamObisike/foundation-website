import * as yup from "yup";

export const eventSponsorshipSchema = yup.object().shape({
  // Section A: Event Details
  eventName: yup
    .string()
    .required("Event name is required")
    .min(3, "Event name must be at least 3 characters")
    .max(100, "Event name must not exceed 100 characters"),

  eventTheme: yup
    .string()
    .max(200, "Event theme must not exceed 200 characters"),

  eventTypes: yup
    .array()
    .of(yup.string())
    .min(1, "Please select at least one event type")
    .required("Event type is required"),

  otherEventType: yup.string().when("eventTypes", {
    is: (eventTypes: string[]) => eventTypes?.includes("Other"),
    then: (schema) => schema.required("Please specify the other event type"),
    otherwise: (schema) => schema,
  }),

  eventDate: yup
    .date()
    .min(new Date(), "Event date cannot be in the past")
    .required("Event date is required"),

  eventTime: yup
    .string()
    .matches(
      /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      "Please enter a valid time format (HH:MM)"
    )
    .required("Event time is required"),

  venue: yup
    .string()
    .required("Venue address is required")
    .min(10, "Please provide a detailed venue address")
    .max(300, "Venue address must not exceed 300 characters"),

  targetAudience: yup
    .string()
    .required("Target audience is required")
    .max(200, "Target audience description must not exceed 200 characters"),

  numAttendees: yup
    .number()
    .typeError("Number of attendees must be a valid number")
    .positive("Number of attendees must be positive")
    .integer("Number of attendees must be a whole number")
    .min(1, "Must have at least 1 attendee")
    .max(100000, "Number seems unrealistic")
    .required("Expected number of attendees is required"),

  // Section B: Organizer Information
  organizerName: yup
    .string()
    .required("Organization/Host name is required")
    .min(2, "Organization name must be at least 2 characters")
    .max(100, "Organization name must not exceed 100 characters"),

  contactPerson: yup
    .string()
    .required("Contact person name is required")
    .min(2, "Contact person name must be at least 2 characters")
    .max(50, "Contact person name must not exceed 50 characters"),

  phoneWhatsApp: yup
    .string()
    .required("Phone/WhatsApp number is required")
    .matches(
      /^[\+]?[0-9\s\-\(\)]{10,15}$/,
      "Please enter a valid phone number"
    ),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required")
    .max(100, "Email address must not exceed 100 characters"),

  socialMedia: yup
    .string()
    .max(200, "Social media handles must not exceed 200 characters"),

  organizedBefore: yup
    .string()
    .oneOf(
      ["yes", "no"],
      "Please select whether you've organized events before"
    )
    .required("This field is required"),

  previousEvents: yup
    .string()
    .when("organizedBefore", {
      is: "yes",
      then: (schema) =>
        schema.required("Please provide details about your previous events"),
      otherwise: (schema) => schema,
    })
    .max(500, "Previous events description must not exceed 500 characters"),

  // Section C: Event Impact & Purpose
  coreObjective: yup
    .string()
    .required("Core objective is required")
    .min(
      20,
      "Please provide a detailed core objective (at least 20 characters)"
    )
    .max(500, "Core objective must not exceed 500 characters"),

  impact: yup
    .string()
    .required("Expected impact is required")
    .min(20, "Please provide detailed information about expected impact")
    .max(500, "Impact description must not exceed 500 characters"),

  speakers: yup
    .string()
    .required("Please provide information about speakers/facilitators")
    .min(5, "Please provide more details about speakers")
    .max(300, "Speakers information must not exceed 300 characters"),

  // Section D: Sponsorship & Visibility
  supportRequested: yup
    .array()
    .of(yup.string())
    .min(1, "Please select at least one type of support")
    .required("Support type is required"),

  otherSupport: yup
    .string()
    .when("supportRequested", {
      is: (supportRequested: string[]) => supportRequested?.includes("Others"),
      then: (schema) =>
        schema.required("Please specify the other support needed"),
      otherwise: (schema) => schema,
    })
    .max(200, "Other support description must not exceed 200 characters"),

  // Section E: Additional Notes
  proposalLink: yup
    .string()
    .url("Please enter a valid URL")
    .max(300, "URL must not exceed 300 characters"),

  additionalComments: yup
    .string()
    .max(1000, "Additional comments must not exceed 1000 characters"),
});

export type EventSponsorshipFormData = yup.InferType<
  typeof eventSponsorshipSchema
>;
