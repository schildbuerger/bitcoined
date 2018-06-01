<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <h1 class="title">Kryptowährungen</h1>
          <h2 class="subtitle">Glossar</h2>
          <div class="field">
            <p class="control has-icons-left">
              <input  class="input is-large" type="text" v-model="search" placeholder="Suchfilter"/>
              <span class="icon is-small is-left">
                <i class="fas fa-filter"></i>
              </span>
            </p>
          </div>
          <div class="message" v-for='item in filteredList' :key='item'>
              <h3 class="message-header"> {{ item.title }} ({{ item.deutsch }})</h3>
              <p class="has-text-left message-body"> {{ item.definition }} </p>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>

class Item {
  constructor (title, deutsch, definition) {
    this.title = title
    this.deutsch = deutsch
    this.definition = definition
  }
}

export default {
  name: 'Glossar',
  data () {
    return {
      itemList: [
        new Item(
          '51% Attack',
          '51% Attacke',
          'Wenn mehr als die Hälfte der Rechenleistung eines Krypto-Währungsnetzwerks von einer einzelnen Einheit oder Gruppe kontrolliert wird, kann diese Einheit oder Gruppe widersprüchliche Transaktionen durchführen, um das Netzwerk zu schädigen, wenn sie die böswillige Absicht hat, dies zu tun.'
        ),
        new Item(
          'Address',
          'Adresse',
          'Krypto-Währungsadressen werden zum Senden oder Empfangen von Transaktionen im Netzwerk verwendet. Eine Adresse stellt sich in der Regel als eine Folge von alphanumerischen Zeichen dar.'
        ),
        new Item(
          'Block',
          'Block',
          'Blöcke sind Datenpakete, die permanent aufgezeichnete Daten im Blockketten-Netzwerk enthalten.'
        ),
        new Item(
          'Blockchain',
          'Blockchain',
          'Eine Blockchain ist ein gemeinsames Ledger, in dem Transaktionen durch Anhängen von Blöcken permanent aufgezeichnet werden. Die Blockchain dient als historische Aufzeichnung aller Transaktionen, die jemals stattgefunden haben, vom Genesis-Block bis zum letzten Block, daher der Name Blockchain.'
        ),
        new Item(
          'Block Explorer',
          'Block Explorer',
          'Der Block-Explorer ist ein Online-Tool, um alle Transaktionen, vergangene und aktuelle, auf der Blockchain anzuzeigen. Sie liefern nützliche Informationen wie Netzwerk-Hash-Rate und Transaktionswachstum.'
        ),
        new Item(
          'Block Height',
          'Block Höhe',
          'Die Anzahl der an der Blockchain angeschlossenen Blöcke.'
        ),
        new Item(
          'Block Reward',
          'Blockprämie',
          'Eine Art Anreiz für den Miner, der das Hash in einem Block während des Abbaus erfolgreich berechnet hat. Die Überprüfung der Transaktionen auf der Blockchain erzeugt dabei neue Coins, von denen der Miner einen Teil erhält.'
        ),
        new Item(
          'Central Ledger',
          'Zentraler Ledger',
          'Ein Ledger, das von einer zentralen Stelle geführt wird.'
        ),
        new Item(
          'Confirmation',
          'Bestätigung',
          'Der erfolgreiche Akt, eine Transaktion zu hashen und der Blockchain hinzuzufügen.'
        ),
        new Item(
          'Consensus',
          'Konsens',
          'Ein Konsens wird erreicht, wenn sich alle Teilnehmer des Netzwerks über die Gültigkeit der Transaktionen einig sind und sicherstellen, dass die Ledger exakte Kopien voneinander sind.'
        ),
        new Item(
          'Cryptocurrency',
          'Kryptowährung',
          'Auch Token genannt, sind Krypto-Währungen Darstellungen von digitalen Assets.'
        ),
        new Item(
          'Cryptographic Hash Function',
          'Kryptographische Hash-Funktion',
          'Kryptographische Hashes erzeugen einen festen und eindeutigen Hash-Wert aus der Eingabe von Transaktionen variabler Größe. Der SHA-256 Berechnungsalgorithmus ist ein Beispiel für einen kryptographischen Hash.'
        ),
        new Item(
          'Distributed Ledger',
          'Verteiltes Ledger',
          'Verteilte Ledger sind Ledger, in denen Daten über ein Netzwerk von dezentralen Knoten abgelegt werden. Ein verteiltes Ledger muss keine eigene Währung haben und kann erlaubt und privat sein.'
        ),
        new Item(
          'Distributed Network',
          'Verteiltes Netzwerk',
          'Eine Art Netzwerk, bei dem die Rechenleistung und die Daten über die Knoten verteilt sind, anstatt über ein zentrales Rechenzentrum zu verfügen.'
        ),
        new Item(
          'Difficulty',
          'Schwierigkeitsgrad',
          'Dies bezieht sich darauf, wie einfach ein Datenblock von Transaktionsinformationen erfolgreich abgebaut werden kann.'
        ),
        new Item(
          'Digital Signature',
          'Digitale Signatur',
          'Ein durch Public-Key-Verschlüsselung erzeugter digitaler Code, der an ein elektronisch übermitteltes Dokument angehängt wird, um dessen Inhalt und die Identität des Absenders zu überprüfen.'
        ),
        new Item(
          'Double Spending',
          'Doppelte Ausgaben',
          'Doppelte Ausgaben entstehen, wenn ein Geldbetrag mehr als einmal ausgegeben wird.'
        ),
        new Item(
          'Fork',
          'Gabelung',
          'Forks erzeugen eine alternative Version der Blockchain und lassen zwei Blockchains gleichzeitig auf verschiedenen Teilen des Netzwerks laufen.'
        ),
        new Item(
          'Genesis Block',
          'Genesis-Block',
          'Die ersten oder ersten paar Blöcke einer Blockchain.'
        ),
        new Item(
          'Hard Fork',
          'Harte Gabelung',
          'Ein Typ eines parallelen Abschnitts, der zuvor ungültige Transaktionen gültig macht und umgekehrt. Diese Art von Fork erfordert von allen Knoten und Benutzern ein Upgrade auf die neueste Version der Protokollsoftware.'
        ),
        new Item(
          'Hash',
          'Hash',
          'Der Akt der Ausführung einer Hash-Funktion auf den Ausgabedaten. Diese wird zur Bestätigung von Coin-Transaktionen verwendet.'
        ),
        new Item(
          'Hash Rate',
          'Hash Rate',
          'Die Messung der Leistung der Mining Rigs wird in Hashes pro Sekunde ausgedrückt.'
        ),
        new Item(
          'Mining',
          'Mining',
          'Mining ist der Akt der Validierung von Blockchain-Transaktionen. Die Notwendigkeit der Validierung rechtfertigt einen Anreiz für die Miner, meist in Form von Coins. In diesem Krypto-Währungsboom kann Mining ein lukratives Geschäft sein, wenn er richtig gemacht wird. Durch die Wahl der effizientesten und geeignetsten Hardware- kann das Mining eine stabile Form des passiven Einkommens erzeugen.'
        ),
        new Item(
          'Multi-Signature',
          'Multi-Signatur',
          'Multi-Signatur-Adressen bieten eine zusätzliche Sicherheitsschicht, indem sie mehr als einen Schlüssel benötigen, um eine Transaktion zu autorisieren.'
        ),
        new Item(
          'Node',
          'Knoten',
          'Eine Kopie des Ledgers, das von einem Teilnehmer des Blockchain-Netzwerks betrieben wird.'
        ),
        new Item(
          'Oracles',
          'Orakel',
          'Orakel fungieren als Brücke zwischen der realen Welt und der Blockchain, indem sie den Smart Contracts Daten zur Verfügung stellen.'
        ),
        new Item(
          'Peer to Peer',
          'Peer zu Peer',
          'Peer to Peer new Item(P2P) bezeichnet die dezentrale Interaktion zwischen zwei oder mehr Parteien in einem hochvernetzten Netzwerk. Die Teilnehmer eines P2P-Netzwerks handeln direkt miteinander über einen einzigen Mediationspunkt.'
        ),
        new Item(
          'Public Address',
          'Öffentliche Adresse',
          'Eine öffentliche Bitcoin-Adresse ist ein kryptographischer Hash eines öffentlichen Schlüssels. Eine öffentliche Ansprache beginnt typischerweise mit der Zahl 1. Stellen Sie sich eine öffentliche Adresse wie eine E-Mail-Adresse vor. Es kann überall veröffentlicht werden und Bitcoin können an sie gesendet werden, genau wie eine E-Mail an eine E-Mail-Adresse.'
        ),
        new Item(
          'Private Key',
          'Privater Schlüssel',
          'Ein privater Schlüssel ist eine Reihe von Daten, mit denen Sie auf die Token in einer bestimmten Wallet zugreifen können. Sie fungieren als Passwörter, die vor jedem außer dem Besitzer der Adresse verborgen bleiben.'
        ),
        new Item(
          'Proof of Stake',
          'Nachweis des Einsatzes',
          'Ein Konsensverteilungsalgorithmus, der die Gewinne auf der Grundlage der Anzahl der Coins, die Sie besitzen oder halten, belohnt. Je mehr Sie in die Coins investieren, desto mehr gewinnen Sie durch den Abbau mit diesem Protokoll.'
        ),
        new Item(
          'Proof of Work',
          'Arbeitsnachweis',
          'Ein Konsensverteilungsalgorithmus, der eine aktive Rolle beim Abbau von Datenblöcken erfordert, die oft Ressourcen wie Strom verbrauchen. Je mehr Arbeit Sie leisten oder je mehr Rechenleistung Sie bereitstellen, desto mehr Coins erhalten Sie.'
        ),
        new Item(
          'SHA-256',
          'SHA-256',
          'SHA-256 ist ein kryptographischer Algorithmus, der von Krypto-Währungen wie Bitcoin verwendet wird. Es verbraucht jedoch viel Rechenleistung und Rechenzeit, so dass die Miner gezwungen sind, Mining Pools zu bilden, um Gewinne zu erzielen.'
        ),
        new Item(
          'Smart Contracts',
          'Intelligente Verträge',
          'Intelligente Verträge kodieren Geschäftsregeln in einer programmierbaren Sprache auf die Blockchain und werden von den Teilnehmern des Netzwerks durchgesetzt.'
        ),
        new Item(
          'Soft Fork',
          'Weiche Gabelung',
          'Ein Soft Fork unterscheidet sich von einem Hard Fork dadurch, dass nur bisher gültige Transaktionen ungültig werden. Da alte Knoten die neuen Blöcke als gültig erkennen, ist ein Soft Fork im Wesentlichen abwärtskompatibel. Diese Art von Fork erfordert von den meisten Minern ein Upgrade, um das zu erzwingen, während bei einer harten Gabel alle Knoten sich auf die neue Version einigen müssen.'
        ),
        new Item(
          'Testnet',
          'Testnet',
          'Eine Test-Blockchain, die von Entwicklern verwendet wird, um zu verhindern, dass Assets in der Main-Blockchain verbraucht werden.'
        ),
        new Item(
          'Transaction Block',
          'Transaktionsblock',
          'Eine Sammlung von Transaktionen, die in einem Block zusammengefasst sind, der dann gehasht und der Blockchain hinzugefügt werden kann.'
        ),
        new Item(
          'Transaction Fee',
          'Transaktionsgebühr',
          'Alle Krypto-Währungstransaktionen sind mit einer geringen Transaktionsgebühr verbunden. Diese Transaktionsgebühren addieren sich zu der Blockprämie, die ein Miner erhält, wenn er einen Block erfolgreich bearbeitet.'
        ),
        new Item(
          'Turing Complete',
          'Turing Complete',
          'Turing Complete bezieht sich auf die Fähigkeit einer Maschine, Berechnungen durchzuführen, zu denen jeder andere programmierbare Computer in der Lage ist. Ein Beispiel dafür ist die Ethereum Virtual Machine new Item(EVM).'
        ),
        new Item(
          'Wallet',
          'Brieftasche',
          'Eine Datei, die private Schlüssel enthält. Es enthält in der Regel einen Software-Client, der den Zugriff auf eine bestimmte Blockchain ermöglicht, für die die Wallet bestimmt ist.'
        ),
        new Item(
          'Ashdraked',
          '',
          'Eine Situation, in der du dein ganzes Geld verloren hast.'
        ),
        new Item(
          'Bagholder',
          '',
          'Jemand hält immer noch eine Altcoin nach einem Pump-and-Dump-Absturz. Kann sich auch nur auf jemanden beziehen, der eine Coin hält, die im Wert sinkt und wenig Zukunftsaussichten hat.'
        ),
        new Item(
          'BTFD new Item(Buy the fucking dip)',
          '',
          'Kauf den verdammten Dip. Empfehlung an andere Händler, eine Coin zu kaufen, die vermutlich ihr Tief erreicht hat.'
        ),
        new Item(
          'Dumping',
          '',
          'Beschreibt den Vorgang die gesamte Menge einer gehaltenen Währung zu verkaufen.'
        ),
        new Item(
          'DYOR',
          '',
          'Do Your Own Research. Hinweis, dass Ratschläge nicht für bare Münze genommen werden sollten.'
        ),
        new Item(
          'FOMO',
          '',
          'Fear of missing out. Das überwältigende Gefühl, dass man schnell einsteigen muss, wenn der Preis für etwas in die Höhe schießt.'
        ),
        new Item(
          'HODL',
          '',
          'HODL ist ein Slang-Begriff und ein Internet-Meme, der in der Bitcoin-Community verwendet wird, wenn es darum geht, die Kryptowährung zu halten, anstatt sie zu verkaufen.'
        ),
        new Item(
          'MCAP new Item(Market capitalisation)',
          '',
          'Der Gesamtwert in einer Krypto-Währung. Er errechnet sich durch Multiplikation des gesamten Coin-Angebots mit dem aktuellen Preis einer einzelnen Einheit.'
        ),
        new Item(
          'Moon / Mooning',
          '',
          'In der Krypto-Welt handelt es sich um einen Preis, der astronomisch ansteigt.'
        ),
        new Item(
          'Pump / Pumping',
          '',
          'Jemand, der für eine andere Krypto-Währung wirbt.'
        ),
        new Item(
          'Rekt',
          '',
          ''
        ),
        new Item(
          'Whale',
          '',
          'Jemand, der absurde Mengen an Krypto-Währung besitzt.'
        ),
        new Item(
          'Fiat Currency',
          '',
          'Bezieht sich auf Währungen, die selbst einen minimalen oder keinen inneren Wert haben new Item(d.h. sie sind nicht durch Rohstoffe wie Gold oder Silber unterlegt), sondern von der Regierung als gesetzliches Zahlungsmittel definiert sind, wie z.B. Papierrechnungen und Münzen.'
        ),
        new Item(
          'Limit order / limit buy / limit sell',
          'Limitauftrag / Limitkauf / Limitverkauf',
          'Aufträge von Händlern zum Kauf oder Verkauf einer Krypto-Währung, wenn der Preis einen bestimmten Betrag erreicht. Sie können als Verkaufsschilder betrachtet werden. Diese Aufträge werden gekauft und verkauft, wenn Händler Marktaufträge erteilen.'
        ),
        new Item(
          'Sell wall / buy wall',
          'Wall verkaufen / kaufen',
          'Anhand eines Tiefendiagramms können Händler die aktuellen Limit-Kauf- und Verkaufspunkte einsehen. Die grafische Darstellung auf dem Tiefendiagramm sieht aus wie Wände, daher der Begriff Wall.'
        ),
        new Item(
          'Market order / market buy / market sell',
          'Marktorder / Marktkauf / Marktverkauf',
          'Ein einfacher Kauf oder Verkauf an einer Börse zum aktuellen Preis. Der Markt kauft bspw. die billigste ETH, die es im Order Book gibt, und der Markt verkauft den teuersten Kaufauftrag im Order Book.'
        ),
        new Item(
          'Margin Trading',
          'Margenhandel',
          'Der Akt der Vergrößerung der Intensität Ihrer Geschäfte, indem Sie Ihre vorhandenen Coins riskieren. new Item(HINWEIS: Sehr riskant, nur für erfahrene Händler und nur an bestimmten Börsen möglich)'
        ),
        new Item(
          'Going long',
          '',
          'Ein Margenhandel, der profitiert, wenn der Preis steigt.'
        ),
        new Item(
          'Going short',
          '',
          'Ein Margenhandel, der profitiert, wenn der Preis sinkt.'
        ),
        new Item(
          'Bullish',
          'Bullisch',
          'Eine Erwartung, dass der Preis steigen wird.'
        ),
        new Item(
          'Bearish',
          'Bärisch',
          'Eine Erwartung, dass der Preis sinken wird.'
        ),
        new Item(
          'Altcoin',
          'Altcoin',
          'Generell jede andere Krypto-Währung als Bitcoin oder Ethereum. new Item(Obwohl einige Bitcoin-Leute wahrscheinlich immer noch sagen würden, dass Ethereum ein Altcoin ist)'
        ),
        new Item(
          'ICO',
          'ICO',
          'Initial Coin Offering, ähnlich einem IPO in der Non-Crypto-Welt. Startups geben ihr eigenes Token im Tausch gegen Crypto aus. Das ist im Wesentlichen Crowdfunding in der Crypto-Welt.'
        ),
        new Item(
          'Arbitrage',
          'Arbitrage',
          'Ausnutzen einer Preisdifferenz der gleichen Krypto-Währungen an zwei verschiedenen Börsen. Bspw. wenn es darum geht, die Preise der ETH an koreanischen Börsen mit denen der US-Börsen zu vergleichen.'
        ),
        new Item(
          'ROI',
          'Kapitalrendite',
          'Der Prozentsatz, wie viel Geld im Vergleich zu einer Erstinvestition verdient wurde. new Item(d.h. 100% ROI bedeutet, dass jemand sein Geld verdoppelt hat).'
        ),
        new Item(
          'Mining rig',
          '',
          'Ein Computer, der speziell für die Verarbeitung von Proof-of-Work-Blockchains entwickelt wurde. Sie bestehen oft aus mehreren High-End-Grafikprozessoren new Item(GPUs), um ihre Rechenleistung zu maximieren.'
        ),
        new Item(
          'Sharding',
          '',
          'Eine Skalierungslösung für Blockchains. Normalerweise enthält jeder Knoten in einem Blockchain-Netzwerk eine vollständige Kopie der Blockchain. Sharding ist eine Methode, die es Knoten ermöglicht, Teilkopien der gesamten Blockchain zu erhalten, um die Gesamtnetzwerkleistung und die Konsensgeschwindigkeit zu erhöhen.'
        ),
        new Item(
          'Software Wallet',
          '',
          'Speicher für Krypto-Währung, die als reine Software-Dateien auf einem Computer existiert. Software-Geldbörsen können kostenlos aus einer Vielzahl von Quellen generiert werden.'
        ),
        new Item(
          'Hardware Wallet',
          '',
          'Ein Gerät, das Krypto-Währung sicher speichern kann. Hardware-Geldbörsen gelten oft als die sicherste Art, Krypto-Währung zu halten.'
        ),
        new Item(
          'Cold Storage',
          '',
          'Der Prozess des Verschiebens der Krypto-Währung offline, um Ihre Krypto-Währung vor Hacking zu schützen. Es gibt eine Vielzahl von Möglichkeiten, dies zu tun, aber einige der am häufigsten verwendeten Methoden sind:\n- Ausdrucken des QR-Codes einer Softwaretasche und Aufbewahrung an einem sicheren Ort, z.B. in einem Bankschließfach.\n- Verschieben der Dateien einer Softwaretasche auf ein USB-Laufwerk und Speichern an einem sicheren Ort. n- Nutzen einer Hardware-Brieftasche.'
        ),
        new Item(
          'Pump And Dump',
          '',
          'Der wiederkehrende Zyklus einer Altcoin, die eine Menge Aufmerksamkeit erregt, führt zu einem schnellen Preisanstieg und dann natürlich zu einem gewaltigen Absturz.'
        ),
        new Item(
          'Circulating Supply',
          'Zirkulationsversorgung',
          'Eine Annäherung an die Anzahl der Coins oder Tokens, die auf dem öffentlichen Markt im Umlauf sind.'
        ),
        new Item(
          'Flipping',
          'Umlegen',
          'Eine Art Anlagestrategie new Item(beliebt bei Immobilieninvestments), bei der Sie etwas mit dem Ziel kaufen, später, meist in kurzer Zeit, für einen Gewinn weiterzuverkaufen. Im Zusammenhang mit ICOs bezieht sich das Flipping auf die Strategie, in Token zu investieren, bevor sie an der Börse notiert werden, und sie gewinnbringend weiterzuverkaufen, wenn sie auf dem Sekundärmarkt gehandelt werden.'
        ),
        new Item(
          'Hard Cap',
          '',
          'Der maximale Betrag, den ein ICO aufbringen wird. Wenn ein ICO seine Hard Cap erreicht, werden sie aufhören, mehr Geld zu sammeln.'
        ),
        new Item(
          'Lightning Network',
          '',
          'Ein P2P-System mit niedriger Latenzzeit und Off-Chain für Mikrozahlungen von Krypto-Währungen. Es bietet Funktionen wie Sofortzahlungen, Skalierbarkeit, niedrige Kosten und kettenübergreifende Funktionalität. Die Teilnehmer müssen einzelne Transaktionen nicht an der Blockchain veröffentlichen und die Sicherheit wird durch Smart Contracts durchgesetzt.'
        ),
        new Item(
          'Maximum supply',
          '',
          'Eine Annäherung an die maximale Anzahl von Coins oder Tokens, die jemals für eine Krypto-Währung oder ein Krypto-Asset existieren werden.'
        ),
        new Item(
          'Pre-sale',
          '',
          'Ein Verkauf, der stattfindet, bevor ein ICO der Öffentlichkeit zur Teilnahme zur Verfügung gestellt wird.'
        ),
        new Item(
          'Segregated Witness new Item(SegWit)',
          '',
          'Der Prozess, bei dem die Blockgröße einer Blockchain erhöht wird, indem digitale Signaturdaten entfernt und an das Ende einer Transaktion verschoben werden, um Kapazitäten freizugeben. Transaktionen werden im Wesentlichen in zwei Segmente unterteilt: das ursprüngliche Datensegment und das Signatursegment new Item(oder Witness).'
        ),
        new Item(
          'Soft Cap',
          '',
          'Bezieht sich im Allgemeinen auf den Mindestbetrag, den ein Inital Coin Offering new Item(ICO) aufbringen muss. Wenn das ICO diesen Betrag nicht aufbringen kann, kann er annulliert und die gesammelten Gelder an die Teilnehmer zurückgegeben werden.'
        ),
        new Item(
          'Whitepaper',
          '',
          'Ein Informationsdokument, das den Leser allgemein über Philosophie, Ziele und Technologie eines Projekts oder einer Initiative informiert. Whitepapers werden oft vor der Einführung einer neuen Coin oder eines neuen Tokens zur Verfügung gestellt.'
        ),
        new Item(
          'BIP',
          '',
          'Bitcoin Improvement Proposal oder BIP, ist ein technisches Design-Dokument, das Informationen für die Bitcoin-Community bereitstellt oder eine neue Funktion für Bitcoin oder seine Prozesse oder Umgebung beschreibt, die das Bitcoin-Protokoll beeinflussen. Neue Funktionen, Vorschläge und Designänderungen am Protokoll sollten als BIP eingereicht werden. Der BIP-Autor ist verantwortlich für die Konsensbildung innerhalb der Gemeinschaft und die Dokumentation abweichender Meinungen.'
        ),
        new Item(
          'Halving',
          'Halbieren',
          'Bitcoins haben einen begrenzten Vorrat, der sie knapp macht. Der Gesamtbetrag, der jemals ausgegeben wird, beträgt 21 Millionen. Die Anzahl der pro Block erzeugten Bitcoins wird alle vier Jahre um 50% reduziert. Das nennt man Halbieren. Die letzte Halbierung findet im Jahr 2140 statt.'
        ),
        new Item(
          'Pool / Mining Pool',
          '',
          'Als Teil des Bitcoin-Minings sind die Pools ein Netzwerk von Minern, die zusammenarbeiten, um einen Block abzubauen und dann die Blockprämie unter den Pool-Minern aufzuteilen. Mining Pools sind eine gute Möglichkeit für Miner, ihre Ressourcen zu bündeln, um die Wahrscheinlichkeit des Abbaus eines Blocks zu erhöhen und gleichzeitig zur allgemeinen Gesundheit und Dezentralisierung des Bitcoin-Netzwerks beizutragen.'
        ),
        new Item(
          'Satoshi Nakamoto',
          '',
          'Bitcoins Existenz begann mit einer wissenschaftlichen Arbeit, die 2008 von einem Entwickler unter dem Namen Satoshi Nakamoto geschrieben wurde. Satoshi ist der Name des ursprünglichen Erfinders von Bitcoin.'
        )
      ],
      search: ''
    }
  },
  computed: {
    filteredList () {
      return this.itemList.filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase()) || item.definition.toLowerCase().includes(this.search.toLowerCase())
      }) || item.deutsch.toLowerCase().includes(this.search.toLowerCase())
    }
  }
}
</script>
