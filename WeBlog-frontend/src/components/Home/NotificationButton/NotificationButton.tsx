import React from "react";
import "./NotificationButton.css";

interface NotificationButtonProps {
  notificationCount: number;
  onClick: () => void;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({
  notificationCount,
  onClick,
}) => {
  return (
    <button className="notification-button" onClick={onClick}>
      <div className="notification-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            fill="currentColor"
          />
        </svg>
      </div>
      {notificationCount > 0 && (
        <span className="notification-badge">
          {notificationCount > 99 ? "99+" : notificationCount}
        </span>
      )}
    </button>
  );
};

export default NotificationButton;
