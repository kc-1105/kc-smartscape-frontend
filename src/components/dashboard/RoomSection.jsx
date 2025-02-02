import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import styles from "./RoomSection.module.css"

export function RoomSection({ title, rooms, handleRoomChange, children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <div className={styles.roomSection}>
      <div className={styles.roomTitleWrapper}>
        <h2 className={styles.roomTitle}>
          {title}
          {rooms && (
            <button className={styles.dropdownToggle} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <FiChevronDown size={24} />
            </button>
          )}
        </h2>
        {rooms && isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {rooms.map((room) => (
              <button key={room} className={styles.dropdownItem} onClick={() => handleRoomChange(room)}>
                {room}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={styles.deviceGrid}>{children}</div>
    </div>
  )
}