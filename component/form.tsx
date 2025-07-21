/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/config/firebase";
import {
  modalStyle,
  containerStyle,
  sectionStyle,
  labelStyle,
  inputStyle,
  checkboxContainer,
  buttonStyle,
} from "@/styles";
import {
  eventSponsorshipSchema,
  EventSponsorshipFormData,
} from "../schema/form";
import toast from "react-hot-toast";

interface EventSponsorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COLLECTION = "event_sponsorship_applications";

export const EventSponsorshipModal: React.FC<EventSponsorshipModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<EventSponsorshipFormData>({
    resolver: yupResolver(eventSponsorshipSchema),
    defaultValues: {
      eventName: "",
      eventTheme: "",
      eventTypes: [],
      otherEventType: "",
      eventDate: undefined,
      eventTime: "",
      venue: "",
      targetAudience: "",
      numAttendees: 0,
      organizerName: "",
      contactPerson: "",
      phoneWhatsApp: "",
      email: "",
      socialMedia: "",
      organizedBefore: "no",
      previousEvents: "",
      coreObjective: "",
      impact: "",
      speakers: "",
      supportRequested: [],
      otherSupport: "",
      proposalLink: "",
      additionalComments: "",
    },
  });

  const watchEventTypes = watch("eventTypes");
  const watchSupportRequested = watch("supportRequested");
  const watchOrganizedBefore = watch("organizedBefore");

  if (!isOpen) return null;

  const onSubmit = async (data: EventSponsorshipFormData) => {
    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, COLLECTION), {
        ...data,
        submittedAt: serverTimestamp(),
        status: "pending",
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Application submitted successfully!");
      onClose();
      reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorStyle: React.CSSProperties = {
    color: "#ef4444",
    fontSize: "14px",
    marginBottom: "8px",
    marginTop: "-8px",
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center">
          <img
            src="/hamrex-logo.png"
            alt="jasper"
            className="w-[100px] rounded-4xl"
          />
        </div>
        <h2
          style={{
            marginTop: 0,
            marginBottom: 20,
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Event Sponsorship Questionnaire
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section A */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: "20px" }}>SECTION A: EVENT DETAIL</h3>

            <label style={labelStyle}>1. Event Name:</label>
            <input
              style={inputStyle}
              placeholder="Name of event, e.g growmie launch"
              {...register("eventName")}
            />
            {errors.eventName && (
              <div style={errorStyle}>{errors.eventName.message}</div>
            )}

            <label style={labelStyle}>2. Event Theme/Topic:</label>
            <input
              style={inputStyle}
              placeholder="How to sell real estate"
              {...register("eventTheme")}
            />
            {errors.eventTheme && (
              <div style={errorStyle}>{errors.eventTheme.message}</div>
            )}

            <label style={labelStyle}>3. Event Type:</label>
            <div style={checkboxContainer}>
              {[
                "Conference",
                "Training",
                "Comedy Show",
                "Campus Event",
                "Other",
              ].map((option) => (
                <Controller
                  key={option}
                  name="eventTypes"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <label
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <input
                        type="checkbox"
                        checked={value?.includes(option) || false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...(value || []), option]
                            : (value || []).filter((item) => item !== option);
                          onChange(newValue);
                        }}
                      />
                      {option}
                    </label>
                  )}
                />
              ))}
            </div>
            {errors.eventTypes && (
              <div style={errorStyle}>{errors.eventTypes.message}</div>
            )}

            {watchEventTypes?.includes("Other") && (
              <>
                <input
                  style={inputStyle}
                  placeholder="Specify other event type"
                  {...register("otherEventType")}
                />
                {errors.otherEventType && (
                  <div style={errorStyle}>{errors.otherEventType.message}</div>
                )}
              </>
            )}

            <label style={labelStyle}>4. Event Date(s):</label>
            <input type="date" style={inputStyle} {...register("eventDate")} />
            {errors.eventDate && (
              <div style={errorStyle}>{errors.eventDate.message}</div>
            )}

            <label style={labelStyle}>5. Event Time:</label>
            <input type="time" style={inputStyle} {...register("eventTime")} />
            {errors.eventTime && (
              <div style={errorStyle}>{errors.eventTime.message}</div>
            )}

            <label style={labelStyle}>6. Venue (Include Address & City):</label>
            <textarea
              style={{ ...inputStyle, height: 60 }}
              placeholder="Hamrex HQ"
              {...register("venue")}
            />
            {errors.venue && (
              <div style={errorStyle}>{errors.venue.message}</div>
            )}

            <label style={labelStyle}>
              7. Target Audience (Age Group, Occupation, Gender, Interests):
            </label>
            <input
              style={inputStyle}
              placeholder="Youths, Church"
              {...register("targetAudience")}
            />
            {errors.targetAudience && (
              <div style={errorStyle}>{errors.targetAudience.message}</div>
            )}

            <label style={labelStyle}>8. Expected Number of Attendees:</label>
            <input
              type="number"
              style={inputStyle}
              placeholder="100"
              {...register("numAttendees")}
            />
            {errors.numAttendees && (
              <div style={errorStyle}>{errors.numAttendees.message}</div>
            )}
          </div>

          {/* Section B */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: "30px" }}>
              SECTION B: ORGANIZER INFORMATION
            </h3>
            <label style={labelStyle}>
              9. Name of Organization or Event Host:
            </label>
            <input
              style={inputStyle}
              placeholder="Group, Team, School"
              {...register("organizerName")}
            />
            {errors.organizerName && (
              <div style={errorStyle}>{errors.organizerName.message}</div>
            )}

            <label style={labelStyle}>10. Contact Person Name:</label>
            <input
              style={inputStyle}
              placeholder="Hamrex PA"
              {...register("contactPerson")}
            />
            {errors.contactPerson && (
              <div style={errorStyle}>{errors.contactPerson.message}</div>
            )}

            <label style={labelStyle}>11. Phone Number & WhatsApp:</label>
            <input
              style={inputStyle}
              placeholder="012394938"
              {...register("phoneWhatsApp")}
            />
            {errors.phoneWhatsApp && (
              <div style={errorStyle}>{errors.phoneWhatsApp.message}</div>
            )}

            <label style={labelStyle}>12. Email Address:</label>
            <input
              style={inputStyle}
              type="email"
              placeholder="sam@hamrex.com"
              {...register("email")}
            />
            {errors.email && (
              <div style={errorStyle}>{errors.email.message}</div>
            )}

            <label style={labelStyle}>
              13. Social Media Handles (Instagram/Facebook/Twitter):
            </label>
            <input style={inputStyle} {...register("socialMedia")} />
            {errors.socialMedia && (
              <div style={errorStyle}>{errors.socialMedia.message}</div>
            )}

            <label style={labelStyle}>
              14. Have you organized events before?
            </label>
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <input
                  type="radio"
                  value="yes"
                  {...register("organizedBefore")}
                />
                Yes
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <input
                  type="radio"
                  value="no"
                  {...register("organizedBefore")}
                />
                No
              </label>
            </div>
            {errors.organizedBefore && (
              <div style={errorStyle}>{errors.organizedBefore.message}</div>
            )}

            {watchOrganizedBefore === "yes" && (
              <>
                <textarea
                  style={{ ...inputStyle, height: 60 }}
                  placeholder="Please provide details about your previous events (links or photos)"
                  {...register("previousEvents")}
                />
                {errors.previousEvents && (
                  <div style={errorStyle}>{errors.previousEvents.message}</div>
                )}
              </>
            )}
          </div>

          {/* Section C */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: "30px" }}>
              SECTION C: EVENT IMPACT & PURPOSE
            </h3>
            <label style={labelStyle}>
              15. What is the core objective of the event?
            </label>
            <textarea
              style={{ ...inputStyle, height: 60 }}
              {...register("coreObjective")}
            />
            {errors.coreObjective && (
              <div style={errorStyle}>{errors.coreObjective.message}</div>
            )}

            <label style={labelStyle}>
              16. What specific impact do you hope to achieve with this event?
            </label>
            <textarea
              style={{ ...inputStyle, height: 60 }}
              {...register("impact")}
            />
            {errors.impact && (
              <div style={errorStyle}>{errors.impact.message}</div>
            )}

            <label style={labelStyle}>
              17. Who are your artists, guest speakers or facilitators?
            </label>
            <input style={inputStyle} {...register("speakers")} />
            {errors.speakers && (
              <div style={errorStyle}>{errors.speakers.message}</div>
            )}
          </div>

          {/* Section D */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: "30px" }}>
              SECTION D: SPONSORSHIP & VISIBILITY
            </h3>
            <label style={labelStyle}>
              20. What kind of support are you requesting from the Foundation?
            </label>
            <div style={checkboxContainer}>
              {[
                "Financial Sponsorship",
                "Branding & Publicity Support",
                "Speakers/Panelists",
                "Others",
              ].map((option) => (
                <Controller
                  key={option}
                  name="supportRequested"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <label
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <input
                        type="checkbox"
                        checked={value?.includes(option) || false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...(value || []), option]
                            : (value || []).filter((item) => item !== option);
                          onChange(newValue);
                        }}
                      />
                      {option}
                    </label>
                  )}
                />
              ))}
            </div>
            {errors.supportRequested && (
              <div style={errorStyle}>{errors.supportRequested.message}</div>
            )}

            {watchSupportRequested?.includes("Others") && (
              <>
                <input
                  style={inputStyle}
                  placeholder="Specify other support"
                  {...register("otherSupport")}
                />
                {errors.otherSupport && (
                  <div style={errorStyle}>{errors.otherSupport.message}</div>
                )}
              </>
            )}
          </div>

          {/* Section E */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: "30px" }}>SECTION E: ADDITIONAL NOTE</h3>
            <label style={labelStyle}>
              21. Please attach or link your official event
              proposal/flyer/poster:
            </label>
            <input
              style={inputStyle}
              placeholder="URL to proposal or flyer"
              {...register("proposalLink")}
            />
            {errors.proposalLink && (
              <div style={errorStyle}>{errors.proposalLink.message}</div>
            )}

            <label style={labelStyle}>
              22. Any additional comments or reasons why we should sponsor your
              event?
            </label>
            <textarea
              style={{ ...inputStyle, height: 80 }}
              {...register("additionalComments")}
            />
            {errors.additionalComments && (
              <div style={errorStyle}>{errors.additionalComments.message}</div>
            )}
          </div>

          <div
            style={{
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-start",
              width: "50%",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                ...buttonStyle,
                marginRight: 10,
                background: "transparent",
                border: "1px solid #e26d39",
                color: "#e26d39",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                ...buttonStyle,
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
