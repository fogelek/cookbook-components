export const defs =
  '<svg class="defs" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">\n' +
  "  <defs>\n" +
  '    <filter id="blurBg">\n' +
  '      <feGaussianBlur stdDeviation="1" />\n' +
  "    </filter>\n" +
  '    <g id="bg">\n' +
  '      <circle r="80" cx="20" cy="20" opacity="20%" filter="url(#blurBg)" />\n' +
  '      <circle r="110" cx="20" cy="20" opacity="30%" filter="url(#blurBg)" />\n' +
  '      <circle r="140" cx="20" cy="20" opacity="40%" filter="url(#blurBg)" />\n' +
  "    </g>\n" +
  "    <g>\n" +
  "      <path\n" +
  '              id="star"\n' +
  '              d="M 5,0\n' +
  "          A 10,10 0 0,0 10,5\n" +
  "          A 10,10 0 0,0 5,10\n" +
  "          A 10,10 0 0,0 0,5\n" +
  '          A 10,10 0 0,0 5,0"\n' +
  "      />\n" +
  '      <use href="#star" transform="scale(1.5)" id="star-large" />\n' +
  '      <use href="#star" transform="scale(0.7)" id="star-small" />\n' +
  '      <use href="#star" transform="scale(0.5)" id="star-tiny" />\n' +
  "    </g>\n" +
  '    <g id="stars">\n' +
  '      <use href="#star-tiny" x="60" y="15" />\n' +
  '      <use href="#star-tiny" x="53" y="-10" />\n' +
  '      <use href="#star-tiny" x="103" y="40" />\n' +
  '      <use href="#star-small" x="90" y="20" />\n' +
  '      <use href="#star-small" x="15" y="16" />\n' +
  '      <use href="#star-small" x="25" y="40" />\n' +
  '      <use href="#star" x="80" y="-10" />\n' +
  '      <use href="#star" x="63" y="37" />\n' +
  '      <use href="#star-large" x="25" y="-5" />\n' +
  '      <use href="#star-large" x="108" y="3" />\n' +
  "    </g>\n" +
  "    <g>\n" +
  "      <path\n" +
  '              id="cloud-outer"\n' +
  '              d="M0,65\n' +
  "              A32,32 0 0,1 45,40\n" +
  "              A40,40 0 0,1 90,30\n" +
  "              A25,25 0 0,1 130,30\n" +
  "              A15,15 0 0,1 150,20\n" +
  "              A25,25 0 0,1 170,10\n" +
  "              A20,20 0 0,1 200,-10\n" +
  "              L200,0\n" +
  '              L200,65"\n' +
  "      />\n" +
  "      <path\n" +
  '              id="cloud-inner"\n' +
  '              d="M0,65\n' +
  "              A32,32 0 0,1 45,50\n" +
  "              A40,40 0 0,1 87,45\n" +
  "              A55,55 0 0,1 145,43\n" +
  "              A15,15 0 0,1 150,38\n" +
  "              A30,30 0 0,1 170,30\n" +
  "              A30,30 0 0,1 200,13\n" +
  "              L200,0\n" +
  '              L200,65"\n' +
  "      />\n" +
  "    </g>\n" +
  "  </defs>\n" +
  "</svg>\n" +
  '<svg class="defs" viewBox="0 0 20 20">\n' +
  "  <defs>\n" +
  '    <g id="craters">\n' +
  '        <circle r="3.5" cx="7" cy="12" />\n' +
  '        <circle r="2.5" cx="11" cy="5" />\n' +
  '        <circle r="2" cx="14.5" cy="12" />\n' +
  "    </g>\n" +
  "  </defs>\n" +
  "</svg>";
