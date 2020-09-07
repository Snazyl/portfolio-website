import React from "react";

const About = () => {
  const data = [
    ["Video Game", "Big Fish Games", "Character Voice"],
    ["Video Game", "CowCat Games", "Character Voice"],
    ["Video Game", "CyberDog", "Character Voice"],
    ["Animation", "Tipsy Duck", "Character Voice"],
    ["Animation", "Yogotars", "Character Voice"],
    ["AudioBook", "Audible", "Narrator"],
    ["Commercial", "Apple Bank", "Narrator"],
    ["Commercial", "Bedford College", "Narrator"],
    ["Commercial", "EatLoveGive", "Narrator"],
    ["Commercial", "Hinge", "Narrator"],
    ["Commercial", "Jaguar", "Narrator"],
    ["Commercial", "Langley College", "Narrator"],
    ["Commercial", "Miami Dade College", "Narrator"],
    ["Commercial", "Milton Keynes College", "Narrator"],
    ["Commercial", "New City College", "Narrator"],
    ["Commercial", "NPTC", "Narrator"],
    ["Commercial", "Orange Coast College", "Narrator"],
    ["Commercial", "Paignton Zoo", "Narrator"],
    ["Commercial", "Payne Records", "Narrator"],
    ["Commercial", "Pilot Pens", "Narrator"],
    ["Commercial", "Richmond University", "Narrator"],
    ["Commercial", "Shuttleworth College", "Narrator"],
    ["Commercial", "Top's Pizza", "Narrator"],
    ["Commercial", "Tresham College", "Narrator"],
    ["Commercial", "UniHomes", "Narrator"],
    ["Commercial", "University of Wales Trinity Saint David", "Narrator"],
  ];

  return (
    <div className="about_me">
      <div className="intro">
        <div className="experience">
          <h1>About me</h1>
          <p>
            With a neutral-accent American English voice, I am able to produce
            international reads which do not get construed as unreal or "phony".
            Having done many characters in the past, I am absolutely comfortable
            on either end of the spectrum; be it the super high energy roles, or
            flipped entirely with an internal dial to a fully professional and
            calm tone. I always make sure to be extremely diligent with every
            job by putting extra care in what I do. I guarantee that through
            attention to detail that not many can provide. I like to add subtle
            nuance to every role by doing research on every character, brand or
            product I do the voiceover for, to make sure I understand the
            intention behind the voice.
          </p>
        </div>
        <div className="equipment">
          <h1>Equipment</h1>
          <p>
            <ul>Microphone</ul>
            <li>Sennheiser MKH 416 Shotgun Microphone.</li>
            <ul>Recording Space</ul>
            <li>
              Private voice recording booth with proper acoustic treatment.
            </li>
            <ul>Supporting Equipment</ul>
            <div className="support">
              <li>Focusrite Solo 3rd Gen audio interface.</li>
              <li>Sennheiser HD 598 Headphones.</li>
              <li>Foam windshield.</li> <li>Pop filter.</li>
            </div>
          </p>
        </div>
        <div></div>
      </div>
      <div className="credits_header">
        <h1>Voiceover Credits</h1>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Production Type</th>
            <th>Company</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            return (
              <tr>
                <th className="data">{data[0]}</th>
                <th className="data">{data[1]}</th>
                <th className="data">{data[2]}</th>
              </tr>
            );
          })}
          {/* <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default About;
