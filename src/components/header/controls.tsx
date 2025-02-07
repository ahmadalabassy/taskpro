import lightmode from './assets/light-mode-icon.svg'
import darkmode from './assets/dark-mode-icon.svg'
import notifications from './assets/notifications.svg'
import help from './assets/help.svg'
import messages from './assets/messages.svg'
import profile from './assets/default-profile.svg'


export default function Controls() {
  return (
    <div className='d-flex justify-content-between align-items-center gap-md-4 gap-2' >
      <img src={lightmode} alt="light mode" />
      <img src={notifications} alt="notifications" />
      <img src={help} alt="help" />
      <img src={messages} alt="messages" />
      <img src={profile} alt="messages" />
    </div>
  )
}