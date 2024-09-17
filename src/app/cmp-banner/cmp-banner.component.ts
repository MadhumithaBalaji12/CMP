import { Component,OnInit } from '@angular/core';
// OnInit -> to initialize the componenet after angular has set the input properties
@Component({
  selector: 'app-cmp-banner',
  templateUrl: './cmp-banner.component.html',
  styleUrl: './cmp-banner.component.scss'
})
export class CmpBannerComponent implements OnInit  {

  showBanner = false;

  ngOnInit(): void {
    this.checkConsent();
  }

  checkConsent() {
    const consent = localStorage.getItem('userConsent');
    console.log('----------consent',typeof consent)
    if (consent == 'false') {
      console.log("--enter")
      this.showBanner = true;
    }
  }

  handleConsent(consent: boolean) {
    localStorage.setItem('userConsent', JSON.stringify(consent));
    this.showBanner = false;

    if (consent) {
      this.loadGoogleAnalytics();
    }
  }

  loadGoogleAnalytics() {
    // Simulate loading Google Analytics based on user consent
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID';
    document.head.appendChild(script);

    script.onload = () => {
      (window as any)['dataLayer'] = (window as any)['dataLayer'] || []; // datalayer array to collect and send data to google servers
      function gtag(...args : any[]) // to make gtag accept argumments
       { (window as any)['dataLayer'].push(arguments); }
      gtag('js', new Date()); // gatg is used for google analytics integration
      gtag('config', 'GA_TRACKING_ID');
    };
  }
}
