"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { EventSponsorshipApplication } from "../../types/form";
import toast from "react-hot-toast";
import FormDetailModal from "./form-detail-modal";

const COLLECTION = "event_sponsorship_applications";
const ITEMS_PER_PAGE = 10;

const FormTable = () => {
  const [applications, setApplications] = useState<
    EventSponsorshipApplication[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] =
    useState<EventSponsorshipApplication | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch applications from Firestore
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, COLLECTION),
          orderBy("submittedAt", "desc")
        );
        const querySnapshot = await getDocs(q);

        const apps: EventSponsorshipApplication[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          apps.push({
            id: doc.id,
            ...data,
            submittedAt:
              data.submittedAt instanceof Timestamp
                ? data.submittedAt.toDate()
                : new Date(data.submittedAt),
            eventDate:
              data.eventDate instanceof Timestamp
                ? data.eventDate.toDate()
                : new Date(data.eventDate),
          } as EventSponsorshipApplication);
        });

        setApplications(apps);
      } catch (error) {
        console.error("Error fetching applications:", error);
        toast.error("Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(applications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentApplications = applications.slice(startIndex, endIndex);

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "approved":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "rejected":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // const handleAccept = () => {
  //   toast.success("Application accepted (dummy action)");
  //   setSelectedApplication(null);
  // };

  // const handleReject = () => {
  //   toast.error("Application rejected (dummy action)");
  //   setSelectedApplication(null);
  // };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e26d39]"></div>
      </div>
    );
  }

  return (
    <div
      className=" bg-gray-50"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingInline: "8px",
      }}
    >
      <div
        className="max-w-7xl mx-auto pt-10 min-h-screen"
        style={{ maxWidth: "1280px", marginInline: "auto" }}
      >
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Event Sponsorship Applications
          </h1>
          <p className="text-gray-600 mt-2">
            Manage and review sponsorship requests
          </p>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              {applications.length}
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#4b5563",
              }}
            >
              Total Applications
            </div>
          </div>

          {/* <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#d97706",
              }}
            >
              {applications.filter((app) => app.status === "pending").length}
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#4b5563",
              }}
            >
              Pending
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#059669",
              }}
            >
              {applications.filter((app) => app.status === "approved").length}
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#4b5563",
              }}
            >
              Approved
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#dc2626",
              }}
            >
              {applications.filter((app) => app.status === "rejected").length}
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#4b5563",
              }}
            >
              Rejected
            </div>
          </div> */}
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead style={{ backgroundColor: "#f9fafb" }}>
                <tr>
                  <th
                    style={{
                      padding: "12px 24px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Event Details
                  </th>
                  <th
                    style={{
                      padding: "12px 24px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Organizer
                  </th>
                  <th
                    style={{
                      padding: "12px 24px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Event Date
                  </th>
                  <th
                    style={{
                      padding: "12px 24px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Attendees
                  </th>
                  <th
                    style={{
                      padding: "12px 24px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      padding: "12px 24px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "white" }}>
                {currentApplications.map((application) => (
                  <tr
                    key={application.id}
                    style={{
                      cursor: "pointer",
                      transition: "background-color 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9fcf3")
                    } // gray-50
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                    onClick={() => setSelectedApplication(application)}
                  >
                    <td
                      style={{ padding: "1rem 1.5rem", whiteSpace: "nowrap" }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "#111827", // text-gray-900
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "20rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {application.eventName}
                        </div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            color: "#6b7280", // text-gray-500
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "20rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {application.eventTheme}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.25rem",
                            marginTop: "0.25rem",
                          }}
                        >
                          {application.eventTypes
                            .slice(0, 2)
                            .map((type, index) => (
                              <span
                                key={index}
                                style={{
                                  display: "inline-block",
                                  backgroundColor: "#dbeafe", // bg-blue-100
                                  color: "#1e40af", // text-blue-800
                                  fontSize: "0.75rem",
                                  padding: "0.25rem 0.5rem",
                                  borderRadius: "0.25rem",
                                }}
                              >
                                {type}
                              </span>
                            ))}
                          {application.eventTypes.length > 2 && (
                            <span
                              style={{
                                display: "inline-block",
                                backgroundColor: "#f3f4f6", // bg-gray-100
                                color: "#4b5563", // text-gray-600
                                fontSize: "0.75rem",
                                padding: "0.25rem 0.5rem",
                                borderRadius: "0.25rem",
                              }}
                            >
                              +{application.eventTypes.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    <td
                      style={{ padding: "1rem 1.5rem", whiteSpace: "nowrap" }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "#111827",
                          }}
                        >
                          {application.organizerName}
                        </div>
                        <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                          {application.contactPerson}
                        </div>
                        <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                          {application.email}
                        </div>
                      </div>
                    </td>

                    <td
                      style={{ padding: "1rem 1.5rem", whiteSpace: "nowrap" }}
                    >
                      <div style={{ fontSize: "0.875rem", color: "#111827" }}>
                        {application.eventDate.toLocaleDateString()}
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                        {application.eventTime}
                      </div>
                    </td>

                    <td
                      style={{ padding: "1rem 1.5rem", whiteSpace: "nowrap" }}
                    >
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#111827",
                        }}
                      >
                        {application.numAttendees.toLocaleString()}
                      </div>
                    </td>

                    <td
                      style={{ padding: "1rem 1.5rem", whiteSpace: "nowrap" }}
                    >
                      <span
                        style={{ padding: "8px", textTransform: "capitalize" }}
                        className={getStatusBadge(application.status)}
                      >
                        {application.status}
                      </span>
                    </td>

                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        whiteSpace: "nowrap",
                        fontSize: "0.875rem",
                        color: "#6b7280",
                      }}
                    >
                      {formatDate(application.submittedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                backgroundColor: "white",
                padding: "0.75rem 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #e5e7eb", // border-gray-200
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                    Showing{" "}
                    <span style={{ fontWeight: 500 }}>{startIndex + 1}</span> to{" "}
                    <span style={{ fontWeight: 500 }}>
                      {Math.min(endIndex, applications.length)}
                    </span>{" "}
                    of{" "}
                    <span style={{ fontWeight: 500 }}>
                      {applications.length}
                    </span>{" "}
                    results
                  </p>
                </div>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    style={{
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#6b7280", // text-gray-500
                      backgroundColor: "white",
                      border: "1px solid #d1d5db", // border-gray-300
                      borderRadius: "0.375rem",
                      cursor: currentPage === 1 ? "not-allowed" : "pointer",
                      opacity: currentPage === 1 ? 0.5 : 1,
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== 1)
                        e.currentTarget.style.backgroundColor = "#f9fafb"; // gray-50
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 1)
                        e.currentTarget.style.backgroundColor = "white";
                    }}
                  >
                    Previous
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    const isActive = currentPage === pageNum;
                    const isVisible =
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 &&
                        pageNum <= currentPage + 1);

                    if (isVisible) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          style={{
                            padding: "0.5rem 0.75rem",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            borderRadius: "0.375rem",
                            backgroundColor: isActive ? "#e26d39" : "white",
                            color: isActive ? "white" : "#6b7280",
                            border: isActive ? "none" : "1px solid #d1d5db",
                            cursor: "pointer",
                            transition: "background-color 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive)
                              e.currentTarget.style.backgroundColor = "#f9fafb";
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive)
                              e.currentTarget.style.backgroundColor = "white";
                          }}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (
                      (pageNum === currentPage - 2 && pageNum > 1) ||
                      (pageNum === currentPage + 2 && pageNum < totalPages)
                    ) {
                      return (
                        <span
                          key={pageNum}
                          style={{ padding: "0 0.5rem", color: "#9ca3af" }} // text-gray-400
                        >
                          ...
                        </span>
                      );
                    }

                    return null;
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    style={{
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#6b7280",
                      backgroundColor: "white",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      cursor:
                        currentPage === totalPages ? "not-allowed" : "pointer",
                      opacity: currentPage === totalPages ? 0.5 : 1,
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== totalPages)
                        e.currentTarget.style.backgroundColor = "#f9fafb";
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== totalPages)
                        e.currentTarget.style.backgroundColor = "white";
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {applications.length === 0 && !loading && (
          <div className="text-center py-12" style={{ marginTop: "20px" }}>
            <div className="text-gray-400 text-6xl mb-4">📋</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No applications yet
            </h3>
            <p className="text-gray-500">
              Applications will appear here once submitted.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedApplication && (
        <FormDetailModal
          selectedApplication={selectedApplication}
          setSelectedApplication={setSelectedApplication}
        />
      )}
    </div>
  );
};

export default FormTable;
