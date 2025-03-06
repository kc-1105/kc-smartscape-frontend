import { useState } from "react"
import {
  MdAir,
  MdLightbulb,
  MdTv,
  MdDelete,
  MdRecycling,
  MdDoorFront,
  MdTimer,
  MdNotifications,
  MdThermostat,
  MdGarage,
  MdWindPower,
  MdSettingsRemote,
  MdBed,
  MdChair,
} from "react-icons/md"
import { DeviceCard } from "./DeviceCard"
import { RoomSection } from "./RoomSection"
import styles from "./DashboardContent.module.css"

const bedroomDevices = {
  "Master Bedroom": [
    { icon: MdWindPower, title: "Ceiling Fan", status: "Medium", isActive: true, statusColor: "statusBlue" },
    { icon: MdDoorFront, title: "Winkey", status: "Docked" },
    { icon: MdLightbulb, title: "Bedside Lamp", status: "Off" },
  ],
  "Guest Bedroom": [
    { icon: MdLightbulb, title: "Main Light", status: "Off" },
    { icon: MdAir, title: "AC", status: "72°F", statusColor: "statusBlue" },
  ],
  "Kids' Bedroom": [
    { icon: MdLightbulb, title: "Night Light", status: "On", statusColor: "statusYellow" },
    { icon: MdBed, title: "Smart Bed", status: "Occupied" },
    { icon: MdChair, title: "Study Lamp", status: "Off" },
  ],
}

export function DashboardContent() {
  const [selectedBedroom, setSelectedBedroom] = useState("Master Bedroom")
  return (
    <>
      <RoomSection title="Living Room">
        <DeviceCard icon={MdLightbulb} title="Lamp" status="Off" />
        <DeviceCard icon={MdAir} title="Heater" status="Off" />
        <DeviceCard icon={MdWindPower} title="Ceiling Fan" status="Low" isActive statusColor="statusYellow" />
        <DeviceCard icon={MdLightbulb} title="Pendant Lights" status="Off" />
        <DeviceCard icon={MdTv} title="Home Theater" status="SHIELD" statusColor="statusGreen" />
        <DeviceCard icon={MdNotifications} title="Media Volume" status="52.0%" statusColor="statusPink" />
        <DeviceCard icon={MdSettingsRemote} title="Remote" status="Shield TV" />
      </RoomSection>

      <RoomSection title="Garage">
        <DeviceCard icon={MdGarage} title="Garage Door" status="Closed" />
        <DeviceCard icon={MdThermostat} title="Freezer Temp" status="-6.5°" statusColor="statusBlue" />
        <DeviceCard icon={MdLightbulb} title="Lights" status="Off" />
        <DeviceCard icon={MdDelete} title="Trash Day" status="In 5 Days" />
        <DeviceCard icon={MdRecycling} title="Recycling Day" status="In 12 Days" statusColor="statusGreen" />
        <DeviceCard icon={MdDoorFront} title="Door" status="Closed" />
      </RoomSection>

      <RoomSection title={selectedBedroom} rooms={Object.keys(bedroomDevices)} handleRoomChange={setSelectedBedroom}>
        {bedroomDevices[selectedBedroom].map((device, index) => (
          <DeviceCard
            key={index}
            icon={device.icon}
            title={device.title}
            status={device.status}
            isActive={device.isActive}
            statusColor={device.statusColor}
          />
        ))}
      </RoomSection>

      <RoomSection title="Front Door">
        <DeviceCard icon={MdTimer} title="Last Motion" status="11 minutes ago" />
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