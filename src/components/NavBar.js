import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faBell, faEnvelope, faCog, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const transparentButtonStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <nav style={{ background: 'transparent', padding: '15px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Broadcast button with tower symbol */}
        <button style={{ background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', marginRight: '10px', cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faBroadcastTower} style={{ marginRight: '5px' }} />
        </button>
        <form style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative', marginRight: '5px' }}>
            <input style={{ padding: '8px', borderRadius: '5px', border: 'none' }} type="text" placeholder="Search" />
            <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '5px' }}>
              {/* Adjusted left position to 5px */}
              <FontAwesomeIcon icon={faSearch} style={{ color: '#777' }} />
            </div>
          </div>
        </form>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        {/* Demo button with down arrow */}
        <button style={{ ...transparentButtonStyle }}>
          Demo <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
        </button>
        {/* Pages button with down arrow */}
        <button style={{ ...transparentButtonStyle }}>
          Pages <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
        </button>
        {/* Accounts button with down arrow */}
        <button style={{ ...transparentButtonStyle }}>
          Accounts <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
        </button>
        {/* My Network button with down arrow */}
        <button style={{ ...transparentButtonStyle }}>
          My Network <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Notification button without arrow */}
        <button style={transparentButtonStyle}>
          <FontAwesomeIcon icon={faBell} style={{ marginRight: '5px' }} />
        </button>
        {/* Message button without arrow */}
        <button style={transparentButtonStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
        </button>
        {/* Settings button without arrow */}
        <button style={transparentButtonStyle}>
          <FontAwesomeIcon icon={faCog} style={{ marginRight: '5px' }} />
        </button>
        {/* Profile picture */}
        <div style={{ marginRight: '10px', position: 'relative' }}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            style={{ borderRadius: '50%', cursor: 'pointer', width: '30px', height: '30px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
