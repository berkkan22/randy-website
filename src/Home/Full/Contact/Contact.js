import React, { Component } from "react";
import "./Contact.css";

import Table from "../About/Table.js";

export default class Contact extends Component {
  state = {
    table: [
      { first: "Alter", second: 19 },
      { first: "Adresse", second: "Finkenwerder, Hamburg, Detuschland" },
      { first: "Nummer", second: 123344567898765 },
      { first: "Email", second: "berkkan22@gmail.com" }
    ]
  };

  render() {
    return (
      <div className="ContactBody">
        <h1 className="headline">Contact</h1>
        <div className="ContactBodyInner">
          <div className="form">
            <div className="forminner">
              <p className="subTitleContact">Write me!</p>
              <form action="" method="post">
                <input type="text" className="formName" placeholder="Name" />
                <input type="email" className="formEmail" placeholder="Email" />
                <textarea
                  className="message"
                  name="Message"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>
                <button className="send">Send</button>
              </form>
            </div>
          </div>
          <div className="infoContact">
            <div className="infoShort">
              <table className="tabelContact">
                <Table table={this.state.table}></Table>
              </table>
            </div>
            <div className="map">
              <iframe
                width=""
                height="300"
                src="https://maps.google.de/maps?hl=de&q=%20Dwarspriel+6+%20Hamburg&t=&z=14&ie=utf8&iwloc=b&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                zoom="100"
              ></iframe>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
