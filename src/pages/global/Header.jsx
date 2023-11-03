import "./Header.css";

const Header = ({title}) => {
  return (
    <div className="header">
      <div className="title">
        {title}
      </div>
      <div className="subTitle" style={{color: '#A0A0A0', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word',width:"100%"}}> Phasellus vitae dapibus libero. Nam a hendrerit nibh, semper consequat purus.
      </div>     
    </div>
  );
};

export default Header;