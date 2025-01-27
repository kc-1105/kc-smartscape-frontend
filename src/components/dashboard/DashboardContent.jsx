"use client"

import {
  MdAir,
  MdLightbulb,
  MdHome,
  MdTv,
  MdDelete,
  MdRecycling,
  MdDoorFront,
  MdTimer,
  MdNotifications,
  MdThermostat,
  MdGarage,
  MdWindPower,
} from "react-icons/md"
import { DeviceCard } from "./DeviceCard"
import { RoomSection } from "./RoomSection"
import styles from "./DashboardContent.module.css"

export function DashboardContent() {
  return (
    <>
      <RoomSection title="Living Room">
        <DeviceCard icon={MdLightbulb} title="Lamp" status="Off" />
        <DeviceCard icon={MdAir} title="Fan Light" status="Off" />
        <DeviceCard icon={MdWindPower} title="Ceiling Fan" status="Low" isActive statusColor="statusYellow" />
        <DeviceCard icon={MdLightbulb} title="Pendant Lights" status="Off" />
        <DeviceCard icon={MdTv} title="Home Theater" status="SHIELD" statusColor="statusGreen" />
        <DeviceCard icon={MdNotifications} title="Media Volume" status="52.0%" statusColor="statusPink" />
        <DeviceCard icon={MdTv} title="Remote" status="Shield TV" />
      </RoomSection>

      <RoomSection title="Garage">
        <DeviceCard icon={MdGarage} title="garage" status="Closed" />
        <DeviceCard icon={MdThermostat} title="Freezer Temp" status="-6.5°" statusColor="statusBlue" />
        <DeviceCard icon={MdHome} title="Help Unload" status="Off" />
        <DeviceCard icon={MdDelete} title="Trash Day" status="In 5 Days" />
        <DeviceCard icon={MdRecycling} title="Recycling Day" status="In 12 Days" statusColor="statusGreen" />
        <DeviceCard icon={MdDoorFront} title="Interior Door" status="Closed" />
      </RoomSection>

      <RoomSection title="Master Bedroom">
        <DeviceCard icon={MdWindPower} title="Ceiling Fan" status="Medium" isActive statusColor="statusBlue" />
        <DeviceCard icon={MdDoorFront} title="Door" status="Locked" />
      </RoomSection>

      <RoomSection title="Front Door">
        <DeviceCard icon={MdTimer} title="Last Motion" status="11min" />
        <DeviceCard icon={MdDoorFront} title="Front Door" status="Closed" />
        <DeviceCard icon={MdNotifications} title="Notifications" status="On" isActive statusColor="statusYellow" />
      </RoomSection>

      <div className={styles.actionBar}>
        <button className={styles.actionButton}>
          <MdLightbulb />
          All Lights and Fans Off
        </button>
        <button className={styles.actionButton}>
          <MdTv />
          Night time TV
        </button>
      </div>
    </>
  )
}

