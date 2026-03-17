import React from 'react'
import { Link } from 'react-router-dom'
import './Explore.css'

export default function Explore() {
  return (
    <div className="explore-root">
      <header className="explore-nav">
        <div className="brand">
          <img src="/compass.png" alt="Compass" />
          <span>Compass</span>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/explore" className="nav-link active">Explore</Link>
          <Link to="/governance" className="nav-link">Governance</Link>
          <Link to="/learn" className="nav-link">Learn</Link>
          <Link to="/get-help" className="nav-link">Get Help</Link>
        </nav>
      </header>

      <div style={{width: '100%', height: '100%', position: 'relative', background: 'white', overflow: 'hidden'}}>
        <img style={{width: 1759, height: 2779, left: 0, top: 0, position: 'absolute'}} src="https://placehold.co/1759x2779" alt="background placeholder" />

        <div style={{width: 836, height: 295, left: -56, top: 178, position: 'absolute', background: 'rgba(206.32, 253.94, 242.51, 0.60)', boxShadow: '194px 194px 194px rgba(206,254,242,0.2)', filter: 'blur(97px)'}} />

        <div style={{width: 679, height: 129, left: 178, top: 234, position: 'absolute'}}>
          <span style={{color: '#00101E', fontSize: 18, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 600, lineHeight: '27px', wordWrap: 'break-word'}}>Read through </span>
          <span style={{color: '#00101E', fontSize: 18, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 700, lineHeight: '27px', wordWrap: 'break-word'}}>Compass</span>
          <span style={{color: '#00101E', fontSize: 18, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 600, lineHeight: '27px', wordWrap: 'break-word'}}> before starting your first projects and <br/>keep it bookmarked as a reference for available connectors, <br/>environments and upcoming features​.</span>
        </div>

        <div style={{width: 574.63, height: 233, left: 863.17, top: 667.50, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px white solid', outlineOffset: '-0.50px'}} />

        <div style={{width: 542, height: 542, left: 761, top: 51, position: 'absolute', background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.73) 0%, rgba(255,255,255,0) 75%)', borderRadius: 9999}} />

        <div style={{width: 542, height: 542, left: 56, top: 480, position: 'absolute', background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(37.05,71.03,95.63,0.73) 0%, rgba(79.69,181.37,255,0.07) 75%)', borderRadius: 9999}} />

        <div style={{width: 542, height: 542, left: 761, top: 882, position: 'absolute', background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.73) 0%, rgba(255,255,255,0) 75%)', borderRadius: 9999}} />

        <div style={{width: 172, height: 172, left: 950, top: 1065, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 6.98, display: 'inline-flex'}}>
          <img style={{width: 147.71, height: 171}} src="https://placehold.co/148x171" alt="placeholder" />
        </div>

        <div style={{width: 542, height: 542, left: 64, top: 1320, position: 'absolute', background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.73) 0%, rgba(255,255,255,0) 75%)', borderRadius: 9999}} />

        <div style={{width: 542, height: 542, left: 778, top: 1705, position: 'absolute', background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.73) 0%, rgba(255,255,255,0) 75%)', borderRadius: 9999}} />

        <img style={{width: 355.57, height: 355.57, left: 965.86, top: 81, position: 'absolute', transform: 'rotate(28deg)', transformOrigin: 'top left'}} src="https://placehold.co/356x356" alt="placeholder" />
        <img style={{width: 179.19, height: 179.19, left: 761.02, top: 248.99, position: 'absolute'}} src="https://placehold.co/179x179" alt="placeholder" />
        <img style={{width: 125.99, height: 106.39, left: 1038.20, top: 142.60, position: 'absolute', borderRadius: 10, backdropFilter: 'blur(27px)'}} src="https://placehold.co/126x106" alt="placeholder" />

        <div style={{width: 495, height: 101, left: 178, top: 327, position: 'absolute', color: '#001F3A', fontSize: 14, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 400, lineHeight: '21px', wordWrap: 'break-word'}}>
          Compass is your organization&apos;s guiding light, helping both customers and employees navigate seamlessly through the vast landscape of processes, available resources, and much more. With Compass, clarity and direction are at your fingertips, ensuring everyone finds the right path within your organization.
        </div>

        <img style={{width: 224, height: 224, left: 223, top: 1479, position: 'absolute'}} src="https://placehold.co/224x224" alt="placeholder" />

        <div style={{height: 274, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, left: 497, top: 646, position: 'absolute', background: 'rgba(255,255,255,0.80)', boxShadow: '0px 2px 4px rgba(0,0,0,0.14), 0px 0px 2px rgba(0,0,0,0.12)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
          <div style={{width: 600, height: 181, position: 'relative'}}>
            <div style={{width: 274, height: 52, left: 0, top: 0, position: 'absolute'}}>
              <div style={{left: 0, top: 0, position: 'absolute', color: '#004F95', fontSize: 22, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, lineHeight: '33px', wordWrap: 'break-word'}}>Connect</div>
              <div style={{left: 0, top: 31, position: 'absolute', color: 'var(--Compass---Links, #295881)', fontSize: 18, fontFamily: 'Montserrat, sans-serif', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word'}}>Streamline your data entry & reporting.</div>
            </div>
            <div style={{width: 600, height: 118, left: 0, top: 76, position: 'absolute'}}>
              <div style={{width: 600, height: 130, left: 0, top: 0.50, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 400, lineHeight: '21px', wordWrap: 'break-word'}}>Connect is your organization&apos;s digital bridge builder. It empowers customers and employees to determine which connectors are allowed or blocked for their solutions. With Connect, you have the power to establish connections that drive innovation while maintaining control. If a connector is blocked, it seamlessly integrates with Checkpoint for approval submission, ensuring a secure yet connected environment.</div>
            </div>
          </div>
          <div style={{width: 140, padding: 12, background: 'var(--Compass---Primary, #3773A7)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 14, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 700, textDecoration: 'underline', lineHeight: '21px', wordWrap: 'break-word'}}>Connect Now</div>
          </div>
        </div>

        <div style={{height: 251, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, left: 497, top: 1472, position: 'absolute', background: 'rgba(255,255,255,0.80)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
          <div style={{width: 600, height: 146, position: 'relative'}}>
            <div style={{width: 274, height: 52, left: 0, top: 0, position: 'absolute'}}>
              <div style={{left: 0, top: 0, position: 'absolute', color: '#004F95', fontSize: 22, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, lineHeight: '33px', wordWrap: 'break-word'}}>Clarity</div>
              <div style={{left: 0, top: 31, position: 'absolute', color: 'var(--Compass---Links, #295881)', fontSize: 18, fontFamily: 'Montserrat, sans-serif', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word'}}>Streamline your data entry & reporting.</div>
            </div>
            <div style={{width: 600, height: 70, left: 0, top: 76, position: 'absolute'}}>
              <div style={{width: 600, height: 103, left: 0, top: 0.50, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 400, lineHeight: '21px', wordWrap: 'break-word'}}>Clarity is your window into the heart of your organization. Designed for administrators, it provides a crystal-clear view of requests submitted through Checkpoint. With Clarity, you gain insights into the pulse of your organization, enabling informed decision-making and efficient management of requests.<br/></div>
            </div>
          </div>
          <div style={{width: 140, padding: 12, background: 'var(--Compass---Primary, #3773A7)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 14, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 700, textDecoration: 'underline', lineHeight: '21px', wordWrap: 'break-word'}}>Start now</div>
          </div>
        </div>

        <div style={{height: 287, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, left: 154, top: 1008, position: 'absolute', background: 'rgba(255,255,255,0.80)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
          <div style={{width: 600, height: 182, position: 'relative'}}>
            <div style={{width: 274, height: 52, left: 0, top: 0, position: 'absolute'}}>
              <div style={{left: 0, top: 0, position: 'absolute', color: '#004F95', fontSize: 22, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, lineHeight: '33px', wordWrap: 'break-word'}}>Checkpoint</div>
              <div style={{left: 0, top: 31, position: 'absolute', color: 'var(--Compass---Links, #295881)', fontSize: 18, fontFamily: 'Montserrat, sans-serif', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word'}}>Streamline your data entry & reporting.</div>
            </div>
            <div style={{width: 600, height: 106, left: 0, top: 76, position: 'absolute'}}>
              <div style={{width: 600, height: 109, left: 0, top: 0.50, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Arial, sans-serif', fontWeight: 400, lineHeight: '21px', wordWrap: 'break-word'}}>Checkpoint is your organization&apos;s gatekeeper, empowering administrators to review and approve solutions proposed by customers and employees. It ensures that all initiatives align with company standards and policies, offering a secure and controlled pathway to innovation within your organization.</div>
            </div>
          </div>
          <div style={{width: 140, padding: 12, background: 'var(--Compass---Primary, #3773A7)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 14, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 700, textDecoration: 'underline', lineHeight: '21px', wordWrap: 'break-word'}}>Check it Now</div>
          </div>
        </div>

        <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, left: 154, top: 1862, position: 'absolute', background: 'rgba(255,255,255,0.80)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
          <div style={{width: 600, height: 143.50, position: 'relative'}}>
            <div style={{width: 274, height: 52, left: 0, top: 0, position: 'absolute'}}>
              <div style={{left: 0, top: 0, position: 'absolute', color: '#004F95', fontSize: 22, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, lineHeight: '33px', wordWrap: 'break-word'}}>Cater</div>
              <div style={{left: 0, top: 31, position: 'absolute', color: 'var(--Compass---Links, #295881)', fontSize: 18, fontFamily: 'Montserrat, sans-serif', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word'}}>Streamline your data entry & reporting.</div>
            </div>
            <div style={{width: 600, height: 68, left: 0, top: 75.50, position: 'absolute'}}>
              <div style={{width: 600, height: 68, left: 0, top: -0.50, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 400, lineHeight: '21px', wordWrap: 'break-word'}}>Cater is your organization&apos;s self-service powerhouse. It empowers customers and employees to take charge by automating tasks that once required administrative intervention. From license assignments to approvals, Cater serves up efficiency on a platter, freeing up resources for what truly matters.</div>
            </div>
          </div>
          <div style={{width: 140, padding: 12, background: 'var(--Compass---Primary, #3773A7)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 14, fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 700, textDecoration: 'underline', lineHeight: '21px', wordWrap: 'break-word'}}>Start now</div>
          </div>
        </div>
      </div>
    </div>
  )
}
