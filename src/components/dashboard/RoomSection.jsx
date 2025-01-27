import styles from "./RoomSection.module.css"

export function RoomSection({ title, children }) {
  return (
    <div className={styles.roomSection}>
      <h2 className={styles.roomTitle}>{title}</h2>
      <div className={styles.deviceGrid}>{children}</div>
    </div>
  )
}

