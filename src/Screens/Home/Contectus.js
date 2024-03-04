import React from "react";
import Dropdown from "../../Components/DropDown";
import insta from "../../Assets/Images/insta.png";
import fb from "../../Assets/Images/fb.png";
import twitter from "../../Assets/Images/twitter.png";
import EmailField from "../../Components/email";

export default function ContactUs() {
  const currency = ["USD", "INR", "UKD", "HKD"];
  const language = ["ENGLISH", "HINDI", "ENGLISH-US", "GERMAN"];

  return (
    <div style={styles.mainContainer}>
      <div style={styles.container}>
      <div style={{   marginBottom: "3vw",
}}>
        <div>
          <div style={styles.title}> COOLMATE </div>
          <div style={{ width: "21vw"}}>
       
           <div style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula ex aliquet, commodo nisl et, mattis lorem. Pellentesque sit amet volutpat ligula, id vestibulum ligula. Cras in molestie felis, id facilisis ante.
            </div>
            
            <div style={styles.para}>
              Morbi ullamcorper ligula sit amet efficitur pellentesque. Aliquam ornare quam tellus, ultricies molestie tortor suscipit et.
            </div>
           </div>
          </div>
        </div>

        <div>
          <div style={styles.title}> CUSTOMER CARE </div>
          <ul style={styles.para}>
            <li>FAQs</li>
            <li>Accessibility Statement</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Contact us</li>
            <li>Gift Card</li>
          </ul>
        </div>

        <div>
          <div style={styles.title}> HELP & SUPPORT </div>
          <ul style={styles.para}>
            <li>Help center</li>
            <li>shipping info</li>
            <li>Returns</li>
            <li>How to order</li>
            <li>How to track</li>
            <li>Size Guide</li>
          </ul>
        </div>

        <div style={{ maxWidth: '12vw', display: 'flex', flexDirection: 'column', gap: '2vw' }}>
          <div>
            <div style={styles.dropdownTitle}> CURRENCY </div>
            <Dropdown placeholder="USD" items={currency} />
          </div>

          <div>
            <div style={styles.dropdownTitle}> LANGUAGE </div>
            <Dropdown placeholder="ENGLISH" items={language} />
          </div>

          <div>
            <div style={styles.dropdownTitle}> FOLLOW US </div>
            <div style={styles.socialIcons}>
              <img src={insta} alt="Instagram" style={styles.socialIcon} />
              <img src={fb} alt="Facebook" style={styles.socialIcon} />
              <img src={twitter} alt="Twitter" style={styles.socialIcon} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: "1.7vw",}}>
          <div style={styles.btitle}>SIGN UP FOR MODAMATE STYLE NEWS</div>
          <div style={styles.smtitle}>Get 15% off your first purchase! Plus, be the first to know about sales, new product launches and exclusive offers!</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '68vw' }}>
            <EmailField />
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  mainContainer:{
    justifyContent: "space-between",
    padding: "2.5vw 9vw",
    backgroundColor: "white",
    alignItems:"center",
  },
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom:'3vw'
  },

  title: {
    fontSize: "1.25vw",
    fontWeight: "700",
    textAlign: "left",
    color: "black",
    display: "flex",
  },

  para: {
    fontSize: "1.1vw",
    fontWeight: "300",
    textAlign: "left",
    color: " rgba(100, 98, 98, 1)",
    marginTop: "1vw",

  },
  btitle: {
    padding: "0.7vw 2vw",
    fontWeight: "700",
    lineHeight: "1",
    fontSize:"2.1vw",
    textAlign:'center'
  },
  smtitle: {
    textAlign: 'center', 
    color: 'rgba(100, 98, 98, 1)',
    fontWeight: "300",
    fontSize: "1.1vw",
    lineHeight: "1.3vw",
    paddingBottom: "0.2vw",
  },
  dropdownTitle: {
    fontSize: "1.25vw",
    fontWeight: "700",
    textAlign: "left",
    color: "black",
    marginBottom: "0.7vw",
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'inline-start',
    alignSelf:'inline-start',
    gap: '10px',
  },
  socialIcon: {
    height:'auto',
    width: '1.26vw',
    resize:'contain',
    BorderRadius:'50%'
  },
  

  '@media (max-width: 768px)': {
    maincontainer: {
      padding: "20px",
      flexDirection: "column",
      alignItems: "center",
    },
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: "4vw", 
      marginBottom: "10px",
    },
    para: {
      fontSize: "3.5vw", 
      textAlign: "center",
      marginBottom: "10px",
    },
    dropdownTitle: {
      fontSize: "4vw",
      textAlign: "center",
      marginBottom: "5px",
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    socialIcon: {
      width: '5vw',
      height: '5vw',
    },
    btitle: {
      fontSize: '5vw',
    },
    smtitle: {
      fontSize: '4vw',
    },
  }
};
