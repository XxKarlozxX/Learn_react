import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.setColorRibbon = this.setColorRibbon.bind(this);
  }

  setColorRibbon( userRol ) {
    let color = '';
    switch (userRol) {
      case 'Developer':
        color = 'blue';      
        break;
      case 'Designer':
        color = 'teal';      
        break;
      case 'SysAdmin':
        color = 'red';      
        break;
      default:
        color = 'black';
        break;
    }
    return color;
  }

  render() {
    const colorRibbon = this.setColorRibbon(this.props.user.rol);
    return (
      <div className="card">
        <div className="image">
          <div class={`${colorRibbon} ribbon label`}>
          { this.props.user.rol }
          </div>
          <img src={this.props.user.url_img} alt="Person"/>
        </div>
        <div className="content">
          <div className="header">{this.props.user.name}</div>
          <div className="description">
            {this.props.user.description}
          </div>
        </div>
        { this.props.user.isEmployed ? ( 
          <div className="extra content">
            <span className="right floated">
              Joined in {this.props.user.entry_date}
            </span>
            <span>
              {this.props.user.project_count} Projects
            </span>
          </div> 
        ) : (
          <div class="extra content message">
            <p>You are in <b>training</b> for now.</p>
          </div>
        )
        }
      </div>
    );
  }
}

export default Card;
