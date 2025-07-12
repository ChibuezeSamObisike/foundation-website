/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useResponsive } from '@/hook/use-screen';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxdDgVWv8LvQL_zsye-ere2C13YZrzhXtfet2yYaQ4AUISFjH3zdligX7m9pysqA7p8bA/exec';

interface EventSponsorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventSponsorshipModal: React.FC<EventSponsorshipModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isSmallScreen } = useResponsive();

  // Form state
  const [eventName, setEventName] = useState('');
  const [eventTheme, setEventTheme] = useState('');
  const [eventTypes, setEventTypes] = useState<string[]>([]);
  const [otherEventType, setOtherEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [venue, setVenue] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [numAttendees, setNumAttendees] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phoneWhatsApp, setPhoneWhatsApp] = useState('');
  const [email, setEmail] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [previousEvents, setPreviousEvents] = useState('');
  const [coreObjective, setCoreObjective] = useState('');
  const [impact, setImpact] = useState('');
  const [speakers, setSpeakers] = useState('');
  const [supportRequested, setSupportRequested] = useState<string[]>([]);
  const [otherSupport, setOtherSupport] = useState('');
  const [proposalLink, setProposalLink] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  if (!isOpen) return null;

  const modalStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: isSmallScreen ? '90%' : 600,
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: 20,
    boxSizing: 'border-box',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: 40,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: 6,
    fontWeight: 600,
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: 8,
    marginBottom: 12,
    boxSizing: 'border-box',
    border: '1px solid #d3d3d3',
    borderRadius: '8px',
  };

  const checkboxContainer: React.CSSProperties = {
    // display: 'flex',
    // flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#e26d39',
    color: '#fff',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    margin: '0px auto',
    marginTop: '30px',
    cursor: 'pointer',
  };

  const handleCheckboxChange = (
    option: string,
    list: string[],
    setList: (arr: string[]) => void,
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    if (evt.target.checked) {
      setList([...list, option]);
    } else {
      setList(list.filter((item) => item !== option));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = {
      eventName,
      eventTheme,
      eventTypes,
      otherEventType,
      eventDate,
      eventTime,
      venue,
      targetAudience,
      numAttendees,
      organizerName,
      contactPerson,
      phoneWhatsApp,
      email,
      socialMedia,
      previousEvents,
      coreObjective,
      impact,
      speakers,
      supportRequested,
      otherSupport,
      proposalLink,
      additionalComments,
    };

    try {
      // 2️⃣ POST JSON to your Apps Script endpoint
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await res.json();
      if (payload.result === 'success') {
        console.log('Submitted successfully!');
        onClose();
      } else {
        console.error('Submission failed:', payload);
      }
    } catch (err) {
      console.error('Network or script error:', err);
    }
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src='/hamrex-logo.png'
            alt='jasper'
            className='w-[100px] rounded-4xl'
          />
        </div>
        <h2
          style={{
            marginTop: 0,
            marginBottom: 20,
            fontSize: '25px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Event Sponsorship Questionnaire
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Section A */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: '20px' }}>SECTION A: EVENT DETAIL</h3>
            <label style={labelStyle}>1. Event Name:</label>
            <input
              style={inputStyle}
              placeholder='Name of event, e.g growmie launch'
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />

            <label style={labelStyle}>2. Event Theme/Topic:</label>
            <input
              style={inputStyle}
              value={eventTheme}
              placeholder='How to sell real estate'
              onChange={(e) => setEventTheme(e.target.value)}
            />

            <label style={labelStyle}>3. Event Type:</label>
            <div style={checkboxContainer}>
              {[
                'Conference',
                'Training',
                'Comedy Show',
                'Campus Event',
                'Other',
              ].map((option) => (
                <label
                  key={option}
                  style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <input
                    type='checkbox'
                    checked={eventTypes.includes(option)}
                    onChange={(e) =>
                      handleCheckboxChange(option, eventTypes, setEventTypes, e)
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
            {eventTypes.includes('Other') && (
              <input
                style={inputStyle}
                placeholder='Specify other event type'
                value={otherEventType}
                onChange={(e) => setOtherEventType(e.target.value)}
              />
            )}

            <label style={labelStyle}>4. Event Date(s):</label>
            <input
              type='date'
              style={inputStyle}
              value={eventDate}
              defaultValue={new Date().getDate()}
              onChange={(e) => setEventDate(e.target.value)}
            />

            <label style={labelStyle}>5. Event Time:</label>
            <input
              type='time'
              style={inputStyle}
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />

            <label style={labelStyle}>6. Venue (Include Address & City):</label>
            <textarea
              style={{ ...inputStyle, height: 60 }}
              placeholder='Hamrex HQ'
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />

            <label style={labelStyle}>
              7. Target Audience (Age Group, Occupation, Gender, Interests):
            </label>
            <input
              style={inputStyle}
              value={targetAudience}
              placeholder='Youths, Church'
              onChange={(e) => setTargetAudience(e.target.value)}
            />

            <label style={labelStyle}>8. Expected Number of Attendees:</label>
            <input
              type='number'
              style={inputStyle}
              value={numAttendees}
              placeholder='100'
              onChange={(e) => setNumAttendees(e.target.value)}
            />
          </div>

          {/* Section B */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: '30px' }}>
              SECTION B: ORGANIZER INFORMATION
            </h3>
            <label style={labelStyle}>
              9. Name of Organization or Event Host:
            </label>
            <input
              style={inputStyle}
              value={organizerName}
              onChange={(e) => setOrganizerName(e.target.value)}
              placeholder='Group, Team, School'
            />
            <label style={labelStyle}>10. Contact Person Name:</label>
            <input
              style={inputStyle}
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              placeholder='Hamrex PA'
            />
            <label style={labelStyle}>11. Phone Number & WhatsApp:</label>
            <input
              style={inputStyle}
              value={phoneWhatsApp}
              onChange={(e) => setPhoneWhatsApp(e.target.value)}
              placeholder='012394938'
            />
            <label style={labelStyle}>12. Email Address:</label>
            <input
              style={inputStyle}
              type='email'
              value={email}
              placeholder='sam@hamrex.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label style={labelStyle}>
              13. Social Media Handles (Instagram/Facebook/Twitter):
            </label>
            <input
              style={inputStyle}
              value={socialMedia}
              onChange={(e) => setSocialMedia(e.target.value)}
            />
            <label style={labelStyle}>
              14. Have you organized events before?
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <input type='radio' name='organizedBefore' /> Yes
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <input type='radio' name='organizedBefore' /> No
            </label>
            <textarea
              style={{ ...inputStyle, height: 60 }}
              placeholder='If yes, share links or photos'
              value={previousEvents}
              onChange={(e) => setPreviousEvents(e.target.value)}
            />
          </div>

          {/* Section C */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: '30px' }}>
              SECTION C: EVENT IMPACT & PURPOSE
            </h3>
            <label style={labelStyle}>
              15. What is the core objective of the event?
            </label>
            <textarea
              style={{ ...inputStyle, height: 60 }}
              value={coreObjective}
              onChange={(e) => setCoreObjective(e.target.value)}
            />
            <label style={labelStyle}>
              16. What specific impact do you hope to achieve with this event?
            </label>
            <textarea
              style={{ ...inputStyle, height: 60 }}
              value={impact}
              onChange={(e) => setImpact(e.target.value)}
            />
            <label style={labelStyle}>
              17. Who are your artists, guest speakers or facilitators?
            </label>
            <input
              style={inputStyle}
              value={speakers}
              onChange={(e) => setSpeakers(e.target.value)}
            />
          </div>

          {/* Section D */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: '30px' }}>
              SECTION D: SPONSORSHIP & VISIBILITY
            </h3>
            <label style={labelStyle}>
              20. What kind of support are you requesting from the Foundation?
            </label>
            <div style={checkboxContainer}>
              {[
                'Financial Sponsorship',
                'Branding & Publicity Support',
                'Speakers/Panelists',
                'Others',
              ].map((option) => (
                <label
                  key={option}
                  style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <input
                    type='checkbox'
                    checked={supportRequested.includes(option)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        option,
                        supportRequested,
                        setSupportRequested,
                        e
                      )
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
            {supportRequested.includes('Others') && (
              <input
                style={inputStyle}
                placeholder='Specify other support'
                value={otherSupport}
                onChange={(e) => setOtherSupport(e.target.value)}
              />
            )}
          </div>

          {/* Section E */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: '30px' }}>SECTION E: ADDITIONAL NOTE</h3>
            <label style={labelStyle}>
              21. Please attach or link your official event
              proposal/flyer/poster:
            </label>
            <input
              style={inputStyle}
              placeholder='URL to proposal or flyer'
              value={proposalLink}
              onChange={(e) => setProposalLink(e.target.value)}
            />
            <label style={labelStyle}>
              22. Any additional comments or reasons why we should sponsor your
              event?
            </label>
            <textarea
              style={{ ...inputStyle, height: 80 }}
              value={additionalComments}
              onChange={(e) => setAdditionalComments(e.target.value)}
            />
          </div>

          <div
            style={{
              textAlign: 'right',
              display: 'flex',
              justifyContent: 'flex-start',
              width: '40%',
            }}
          >
            <button
              type='button'
              onClick={onClose}
              style={{
                ...buttonStyle,
                marginRight: 10,
                background: 'transparent',
                border: '1px solid #e26d39',
                color: '#e26d39',
              }}
            >
              Cancel
            </button>
            <button type='submit' style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
