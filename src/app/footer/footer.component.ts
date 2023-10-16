import { Component } from '@angular/core';
import { faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faYelp=faYelp;
  faGoogle=faGoogle;
}
