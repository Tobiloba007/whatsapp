import React from 'react'
import './Settings.css'
import SettingsIcon from '@mui/icons-material/Settings';
import StarRateIcon from '@mui/icons-material/StarRate';
import DevicesIcon from '@mui/icons-material/Devices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';

const Setings = () => {
  return (
    <div className='settings'>
     <div className='head'> 
     <SettingsIcon className='head-icon'/>
     <h3 className='settings-heading'>Settings</h3>
         </div>
        <div className="fade">

        <div className='set'>
          <StarRateIcon className='icon' style={{color: 'gold'}} />
          <div className='black'>
            <h4 className='subject'>Stared Messages</h4>
            <p className='content'>All Stared messages from chats and groups</p>
          </div>
          </div>

          <div className='set'>
          <DevicesIcon className='icon' style={{color: 'purple'}} />
          <div className='black'>
            <h4 className='subject'>Linked Devices</h4>
            <p className='content'>Manage other devices used on whatsapp...</p>
          </div>
          </div>

          <div className='set'>
          <ManageAccountsIcon className='icon' style={{color: 'darkGreen '}} />
          <div className='black'>
            <h4 className='subject'>Account</h4>
            <p className='content'>Profile and personal info</p>
          </div>
          </div>

          <div className='set'>
          <WhatsAppIcon className='icon' style={{color: 'darkGreen '}} />
          <div className='black'>
            <h4 className='subject'>Chat</h4>
            <p className='content'>Chat wallpaper, backups achieved chats...</p>
          </div>
          </div>

          <div className='set'>
          <NotificationsIcon className='icon' style={{color: 'skyBlue'}}/>
          <div className='black'>
            <h4 className='subject'>Notifications</h4>
            <p className='content'>Edit notifications, reactions, sounds...</p>
          </div>
          </div>

          <div className='set'>
          <DataUsageIcon className='icon' style={{color: 'green'}} />
          <div className='black'>
            <h4 className='subject'>Storage and Data</h4>
            <p className='content'>Manage storage, network usage...</p>
          </div>
          </div>

          <div className='set'>
          <HelpIcon className='icon' style={{color: 'orange'}} />
          <div className='black'>
            <h4 className='subject'>Help</h4>
            <p className='content'>Help center, Contact us, terms & conditions</p>
          </div>
          </div>

          <div className='set'>
          <PeopleIcon className='icon' style={{color: 'green'}} />
          <div className='black last'>
            <h4 className='subject'>Tell a Friend</h4>
            <p className='content'>Invite friends to the platform</p>
          </div>
          </div>

        </div>

    </div>
  )
}

export default Setings