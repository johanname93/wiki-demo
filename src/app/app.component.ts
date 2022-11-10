import { Component } from '@angular/core';
import { IArticle } from './interfaces/article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor() {}

  public getId(title: string): string {
    return '#' + title;
  }
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
      unterstützen.[1]`,
    sections: [
      {
        title: 'Einsatzgebiete',
        content: `<p>
  Die Einsatzgebiete und gesundheitsbezogenen Ziele von DiGA sind
  vielfältig. Beispiele sind:
</p>
<ul>
  <li>
    Elektronische Gesundheitsinformationen (z. B. interaktive
    <a href="https://de.wikipedia.org/wiki/Patienteninformation"
      >Patienteninformationen</a
    >, beispielsweise zur
    <a href="https://de.wikipedia.org/wiki/Selbstdiagnose">Selbstdiagnose</a
    >);
  </li>
  <li>
    Elektronische Tagebücher (z. B.
    <a href="https://de.wikipedia.org/wiki/Diabetes_mellitus">Diabetes</a
    >-Tagebuch,
    <a href="https://de.wikipedia.org/wiki/Medikationsplan"
      >Medikationsplan</a
    >);
  </li>
  <li>
    <a href="https://de.wikipedia.org/wiki/Diagnostik">Diagnostik</a>- und
    <a href="https://de.wikipedia.org/wiki/Therapie">Therapie</a>-<a
      href="https://de.wikipedia.org/wiki/Software"
      >Software</a
    >
    (z. B.
    <a href="https://de.wikipedia.org/wiki/Muttermal">Muttermal</a>-Apps,
    Online-<a href="https://de.wikipedia.org/wiki/Coaching">Coaching</a>).
  </li>
  <li>
    Als interaktives Online-Therapieprogramm, z. B. bei
    <a href="https://de.wikipedia.org/wiki/Depression">Depression</a>
    und/oder depressiver Verstimmung als Therapieunterstützung und/oder
    Wartezeitüberbrückung. Patienten warten im Durchschnitt fast fünf Monate
    auf den Beginn einer Psychotherapie.
  </li>
</ul>
<p>
  In Deutschland können geprüfte Gesundheits-Apps im Rahmen der
  <a href="https://de.wikipedia.org/wiki/Gesetzliche_Krankenversicherung"
    >Gesetzlichen Krankenversicherung</a
  >
  <a href="https://de.wikipedia.org/wiki/Rezept_(Medizin)">verordnet</a>
  werden, seitdem das
  <a href="https://de.wikipedia.org/wiki/Digitale-Versorgung-Gesetz"
    >Digitale-Versorgung-Gesetz</a
  >
  am 19. Dezember 2019 in Kraft getreten ist. Die dafür zuständige Behörde
  ist das BfArM.
</p>
<p>
  Das BfArM hat den gesetzlichen Auftrag bekommen, ein Verzeichnis
  erstattungsfähiger digitaler Gesundheitsanwendungen aufzubauen
  (DiGA-Verzeichnis) und zu führen.
</p>`,
        subsections: [],
      },
      {
        title:
          'Dauerhaft in das DiGA-Verzeichnis aufgenommene Anwendungen und Indikationen',
        content: '',
        subsections: [],
      },
      {
        title: 'Verfahren zur Genehmigung von DiGA',
        content: '',
        subsections: [],
      },
      {
        title: 'Evidenz von DiGA',
        content: '',
        subsections: [
          {
            title: 'Preisgestaltung von DiGA',
            content: '',
          },
          {
            title: 'Verordnung von DiGA in der GKV',
            content: '',
          },
        ],
      },
    ],
  };
}
