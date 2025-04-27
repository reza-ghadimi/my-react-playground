// **************************************************
// A-01:
// **************************************************
import { log } from '../../log.js';
import logoImage from '../../assets/logo.png';

export default function Header() {
  log('<Header /> rendered', 1);

  return (
    <header id="main-header">
      <img src={logoImage} alt="Magnifying glass analyzing a document" />
      <h1>React - Behind The Scenes</h1>
    </header>
  );
}
// **************************************************