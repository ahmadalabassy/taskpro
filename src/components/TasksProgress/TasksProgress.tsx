import { useMemo, useState } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { formatDate, getStatusLabel } from "../../utils/statusUtils";
import styles from "./TasksProgress.module.css";
import Profile from "./../Profile/Profile";
import { TaskCardProps } from "../TaskCard/TaskCard";

export default function TasksProgress({ task }: TaskCardProps) {
  const [selectedMember, setSelectedMember] =
    useState<TeamMemberCardProps | null>(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (member: TeamMemberCardProps) => {
    setSelectedMember(member);
    setShow(true);
  };
  const { title, status, progress, members, dueDate, completedDate } = task;

  // Memoize status badge class to prevent recalculation on re-renders
  const statusBadgeClass = useMemo(() => {
    switch (status) {
      case "in-progress":
        return styles.inProgressBadge;
      case "on-hold":
        return styles.onHoldBadge;
      case "completed":
        return styles.completedBadge;
      default:
        return "";
    }
  }, [status]);

  // Memoize progress bar class to prevent recalculation on re-renders
  const progressBarClass = useMemo(() => {
    switch (status) {
      case "in-progress":
        return styles.inProgressBar;
      case "on-hold":
        return styles.onHoldBar;
      case "completed":
        return styles.completedBar;
      default:
        return "";
    }
  }, [status]);

  const maxDisplayMembers = 5;
  const displayMembers = members.slice(0, maxDisplayMembers);
  const remainingCount = members.length - maxDisplayMembers;

  return (
    <Card className={styles.taskCard}>
      <Card.Body className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.title}>{title}</h3>
          <span
            className={`${styles.badge} ${statusBadgeClass}`}
            data-testid={`status-badge-${status}`}
          >
            {getStatusLabel(status)}
          </span>
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.avatarGroup}>
            <div className={styles.avatars}>
              {displayMembers.map((member, index) => (
                <OverlayTrigger
                  key={member.id}
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${member.id}`}>{member.name}</Tooltip>
                  }
                  delay={{ show: 250, hide: 400 }}
                >
                  <div
                    className={styles.avatarWrapper}
                    style={{ zIndex: displayMembers.length - index }}
                  >
                    <img
                      src={member.image || "./default-profile-img.svg"}
                      alt={member.name || "User"}
                      className={styles.avatar}
                      onClick={() => handleShow(member)}
                    />
                  </div>
                </OverlayTrigger>
              ))}
              {selectedMember && (
                <Profile {...selectedMember} Show={show} onHide={handleClose} />
              )}

              {remainingCount > 0 && (
                <div className={styles.remainingCount} style={{ zIndex: 0 }}>
                  +{remainingCount}
                </div>
              )}
            </div>
            <div className={styles.memberCount}>
              {members.length} {members.length === 1 ? "member" : "members"}
            </div>
          </div>
          <div className={styles.dateInfo}>
            {status === "completed" ? (
              <span>
                Completed: {completedDate && formatDate(completedDate)}
              </span>
            ) : (
              <span>Due: {dueDate && formatDate(dueDate)}</span>
            )}
          </div>
        </div>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBarBackground}>
            <div
              className={`${styles.progressBarFill} ${progressBarClass}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
