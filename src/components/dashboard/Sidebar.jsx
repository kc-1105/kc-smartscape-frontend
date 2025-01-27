"use client"

import { MdHome, MdLightbulb, MdGroup, MdNetworkWifi, MdSettings } from "react-icons/md"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Sidebar.module.css"

const navigation = [
  { name: "Home", href: "/dashboard", icon: MdHome },
  { name: "Lighting Scenes", href: "/dashboard/lighting", icon: MdLightbulb },
  { name: "Family", href: "/dashboard/family", icon: MdGroup },
  { name: "Network", href: "/dashboard/network", icon: MdNetworkWifi },
  { name: "Settings", href: "/dashboard/settings", icon: MdSettings },
]

export function Sidebar() {
  const pathname = usePathname()
  const currentTime = new Date()
  const hours = currentTime.getHours() % 12 || 12 // Convert to 12-hour format
  const minutes = currentTime.getMinutes()
  const ampm = currentTime.getHours() >= 12 ? "pm" : "am"
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${ampm}`
  const dateString = currentTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
  })

  return (
    <div className={styles.sidebar}>
      <div className={styles.timeDisplay}>
        <div className={styles.currentTime}>{timeString}</div>
        <div className={styles.currentDate}>{dateString}</div>
      </div>
      <nav className={styles.navMenu}>
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href} className={`${styles.navLink} ${isActive ? styles.active : ""}`}>
              <item.icon />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className={styles.statusInfo}>
        <p>Good evening 👋 Matt</p>
        <p>The temperature inside is 73.5°F</p>
        <p>Outside it is partlycloudy and 80°F</p>
        <p>There are 0 lights on</p>
        <p>It is Alex&apos;s night for cat chores</p>
      </div>
    </div>
  )
}