import { Component } from '@angular/core';
import { IArticle } from './interfaces/article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  article: IArticle = {
    title: 'Digitale Gesundheitsanwendung',
    definition: `Als <span class="bold">Digitale Gesundheitsanwendungen</span> (abgekürzt 
      <span class="italic">DiGA</span>) werden
      <a href="https://de.wikipedia.org/wiki/Medizinprodukt">Medizinprodukte</a>
      mit gesundheitsbezogener Zweckbestimmung bezeichnet, deren Hauptfunktion
      wesentlich auf
      <a
        href="https://de.wikipedia.org/wiki/Informations-_und_Kommunikationstechnik"
        >digitalen Technologien</a
      >
      beruht (z. B. „Gesundheits-Apps“) und die von den Krankenkassen erstattet
      werden. Sie sind dazu bestimmt, die Förderung der Gesundheit sowie die
      Erkennung, Überwachung, Behandlung von Krankheiten und Behinderung zu
      unterstützen.[1]`

  }

  
}
