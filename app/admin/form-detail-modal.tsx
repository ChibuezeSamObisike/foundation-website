import { EventSponsorshipApplication } from "@/types/form";
import React from "react";

const FormDetailModal = ({
  selectedApplication,
  setSelectedApplication,
}: {
  selectedApplication: EventSponsorshipApplication;
  setSelectedApplication: (payload: EventSponsorshipApplication | null) => void;
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "0.5rem",
          maxWidth: "56rem",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#111827",
              }}
            >
              {selectedApplication.eventName}
            </h2>
            {/* <span style={getStatusBadge(selectedApplication.status)}>
                  {selectedApplication.status}
                </span> */}
          </div>
          <button
            onClick={() => setSelectedApplication(null)}
            style={{
              color: "#9ca3af",
              fontSize: "1.5rem",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            // onMouseEnter={(e) => (e.target.style.color = "#4b5563")}
            // onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Event Details */}
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Event Details
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Event Name
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.eventName}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Theme
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.eventTheme || "N/A"}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Event Types
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.eventTypes.join(", ")}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Date & Time
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.eventDate.toLocaleDateString()} at{" "}
                  {selectedApplication.eventTime}
                </p>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Venue
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.venue}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Target Audience
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.targetAudience}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Expected Attendees
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.numAttendees.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Organizer Information */}
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Organizer Information
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Organization
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.organizerName}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Contact Person
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.contactPerson}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Phone/WhatsApp
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.phoneWhatsApp}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Email
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.email}
                </p>
              </div>
              {selectedApplication.socialMedia && (
                <div style={{ gridColumn: "1 / -1" }}>
                  <label
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Social Media
                  </label>
                  <p
                    style={{
                      marginTop: "0.25rem",
                      fontSize: "0.875rem",
                      color: "#111827",
                    }}
                  >
                    {selectedApplication.socialMedia}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Event Impact */}
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Event Impact & Purpose
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Core Objective
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.coreObjective}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Expected Impact
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.impact}
                </p>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Speakers/Facilitators
                </label>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    color: "#111827",
                  }}
                >
                  {selectedApplication.speakers}
                </p>
              </div>
            </div>
          </div>

          {/* Support Requested */}
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Support Requested
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#111827",
              }}
            >
              {selectedApplication.supportRequested.join(", ")}
            </p>
            {selectedApplication.otherSupport && (
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#4b5563",
                  marginTop: "0.5rem",
                }}
              >
                Other: {selectedApplication.otherSupport}
              </p>
            )}
          </div>

          {/* Additional Information */}
          {(selectedApplication.proposalLink ||
            selectedApplication.additionalComments) && (
            <div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  color: "#111827",
                  marginBottom: "1rem",
                }}
              >
                Additional Information
              </h3>
              {selectedApplication.proposalLink && (
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Proposal Link
                  </label>
                  <a
                    href={selectedApplication.proposalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: "0.25rem",
                      fontSize: "0.875rem",
                      color: "#2563eb",
                      textDecoration: "underline",
                      display: "block",
                      transition: "color 0.2s",
                    }}
                    // onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
                    // onMouseLeave={(e) => e.target.style.color = '#2563eb'}
                  >
                    {selectedApplication.proposalLink}
                  </a>
                </div>
              )}
              {selectedApplication.additionalComments && (
                <div>
                  <label
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Additional Comments
                  </label>
                  <p
                    style={{
                      marginTop: "0.25rem",
                      fontSize: "0.875rem",
                      color: "#111827",
                    }}
                  >
                    {selectedApplication.additionalComments}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {/* <div
          style={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "#f9fafb",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.75rem",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <button
            // onClick={handleReject}
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#b91c1c",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            Reject Application
          </button>
          <button
            // onClick={handleAccept}
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#ffffff",
              backgroundColor: "#e26d39",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            Accept Application
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FormDetailModal;
