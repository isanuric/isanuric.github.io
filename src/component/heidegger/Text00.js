import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import BottomLinks from "../BottomLinks";
import Footer from "../Footer";
import PostSingle from "../PostSingle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

function Text() {
  const variables = {
    image:
      "https://images.pexels.com/photos/10404272/pexels-photo-10404272.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: (
      <>
        منبع‌ها، کوته‌نوشت‌ها و معرفی مجموعه آثار هایدگر
        <br />
      </>
    ),
    text: (
      <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
        <p dir="rtl">
          شماره‌گذاری‌ها بر اساسِ شماره‌گذاری رسمی مجموعه آثار هایدگر &nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Heidegger_Gesamtausgabe"
            target="_blank"
          >
            Gesamtausgabe
          </a>
          &nbsp; است که به اختصار GA نامیده می‌شود.
        </p>
        <br />
        <b>Heidegger Gesamtausgabe:</b>
        <br />
        GA-1. Frühe Schriften (1912–1916), ed. F.-W. von Herrmann, 1978, XII,
        454p.
        <br />
        GA-2. Sein und Zeit (1927), ed. F.-W. von Herrmann, 1977, XIV, 586p.
        <br />
        GA-3. Kant und das Problem der Metaphysik (1929), ed. F.-W. von
        Herrmann, 1991, XVIII, 318p.
        <br />
        GA-4. Erläuterungen zu Hölderlins Dichtung (1936–1968), ed. F.W. von
        Herrmann, 1981, 2nd edn. 1996, 208p.
        <br />
        GA-5. Holzwege (1935–1946), ed. F.-W. von Herrmann, 1977, 2nd edn. 2003,
        VI, 382p.
        <br />
        GA-6.1. Nietzsche I (1936–1939), ed. B. Schillbach, 1996, XIV, 596p.
        <br />
        GA-6.2. Nietzsche II (1939–1946), ed. B. Schillbach, 1997, VIII, 454p.
        <br />
        GA-7. Vorträge und Aufsätze (1936–1953), ed. F.-W. von Herrmann, 2000,
        XVIII, 298p.
        <br />
        GA-8. Was heisst Denken? (1951–1952), ed. P.-L. Coriando, 2002, VIII,
        268p.
        <br />
        GA-9. Wegmarken (1919–1961), ed. F.-W. von Herrmann, 1976, 2nd edn.
        1996, 3rd edn. 2004, X, 488p.
        <br />
        GA-10. Der Satz vom Grund (1955–1956), ed. P. Jaeger, 1997, VIII, 192p.
        <br />
        GA-11. Identität und Differenz (1955–1957), ed. F.-W. von Herrmann, 2nd
        edn. 2006, 168p.
        <br />
        GA-12. Unterwegs zur Sprache (1950–1959), ed. F.-W. von Herrmann, 1985,
        262p.
        <br />
        GA-13. Aus der Erfahrung des Denkens (1910–1976), ed. H. Heidegger,
        1983, 2nd edn. 2002, VIII, 254p.
        <br />
        GA-14. Zur Sache des Denkens (1962–1964), ed. F.-W. von Herrmann, 2007,
        156p.
        <br />
        GA-15. Seminare (1951–1973), ed. C. Ochwadt, 1986, 2nd edn. 2005, 448p.
        <br />
        GA-16. Reden und andere Zeugnisse eines Lebensweges (1910–1976), ed. H.
        Heidegger, 2000, XXII, 842p.
        <br />
        GA-17. Einführung in die phänomenologische Forschung (Winter semester
        1923/24), ed. F.-W. von Herrmann, 1994, 2nd edn. 2006, XIV, 332p.
        <br />
        GA-18. Grundbegriffe der aristotelischen Philosophie (Summer semester
        1924)
        <br />
        GA-20. Prolegomena zur Geschichte des Zeitbegriffs (Summer semester
        1925), ed. P. Jaeger, 1979, 2nd edn. 1988, 3rd edn. 1994, XII, 448p.
        <br />
        GA-21. Logik. Die Frage nach der Wahrheit (Winter semester 1925/26), ed.
        W. Biemel, 1976, 2nd edn. 1995, VIII, 418p.
        <br />
        GA-22. Grundbegriffe der antiken Philosophie (Summer semester 1926) ed.
        F.-K. Blust, 1993, 2nd edn. 2004, XIV, 344p.
        <br />
        GA-23. Geschichte der Philosophie von Thomas von Aquin bis Kant (Winter
        semester 1926/27), ed. H. Vetter, 2006. XII, 248p.
        <br />
        GA-24. Die Grundprobleme der Phänomenologie (Summer semester 1927), ed.
        F.-W. von Herrmann, 1975, 2nd edn. 1989, 3rd edn. 1997, X, 474p.
        <br />
        GA-25. Phänomenologische Interpretation von Kants Kritik der reinen
        Vernunft (Winter semester 1927/28), ed. I. Görland, 1977, 2nd edn. 1987,
        3rd edn. 1995, XII, 436p.
        <br />
        GA-26. Metaphysische Anfangsgründe der Logik im Ausgang von Leibniz
        (Summer semester 1928), ed. K.Held, 1978, 2nd edn 1990, VI, 292p.
        <br />
        GA-27. Einleitung in die Philosophie (Winter semester 1928/29), ed. O.
        Saame et I. Saame-Speidel, 1996, 2nd edn. 2001, XII, 404p.
        <br />
        GA-28. Der deutsche Idealismus (Fichte, Schelling, Hegel)
        <br />
        GA-29/30. Die Grundbegriffe der Metaphysik. Welt – Endlichkeit –
        Einsamkeit (Winter semester 1929/30), ed. F.-W. von Herrmann, 1983
        <br />
        GA-31. Vom Wesen der menschlichen Freiheit. Einleitung in die
        Philosophie (Summer semester 1930), ed. H. Tietjen, 1982, 2nd edn. 1994,
        XII, 308p.
        <br />
        GA-32. Hegels Phänomenologie des Geistes (Winter semester 1930/31), ed.
        I. Görland, 1980, 2nd edn. 1988, 3rd edn. 1997, VIII, 224p.
        <br />
        GA-33. Aristoteles, Metaphysik J 1–3. Von Wesen und Wirklichkeit der
        Kraft (Summer semester 1931), ed. H. Hüni, 1981
        <br />
        GA-34. Vom Wesen der Wahrheit. Zu Platons Höhlengleichnis und Theätet
        (Winter semester 1931/32), ed. H. Mörchen, 1988, 2nd edn. 1997, X, 338p.
        <br />
        GA-35. Der Anfang der abendländischen Philosophie (Anaximander und
        Parmenides) (Summer semester 1932), ed. P. Trawny, 2012, XII, 272p.
        <br />
        GA-36/37. Sein und Wahrheit / 1. Die Grundfrage der Philosophie (Summer
        semester 1933)
        <br />
        GA-38. Logik als die Frage nach dem Wesen der Sprache (Summer semester
        1934), ed. G.Seubold, 1998, VIII, 176p.
        <br />
        GA-38 A. Logik als die Frage nach dem Wesen der Sprache (Summer semester
        1934), ed. P. Trawny, 2020, X, 190p.[3]
        <br />
        GA-39. Hölderlins Hymnen "Germanien" und "Der Rhein" (Winter semester
        1934/35), ed. S.Ziegler, 1980, 2nd edn. 1989, 3rd edn. 1999, XII, 296p.
        <br />
        GA-40. Einführung in die Metaphysik (Summer semester 1935), ed. P.
        Jaeger, 1983, X, 234p.
        <br />
        GA-41. Die Frage nach dem Ding. Zu Kants Lehre von den transzendentalen
        Grundsätzen (Winter semester 1935/36)
        <br />
        GA-42. Schelling: Vom Wesen der menschlichen Freiheit (1809) (Summer
        semester 1936), ed. I. Schüssler, 1988, X, 290p.
        <br />
        GA-43. Nietzsche: Der Wille zur Macht als Kunst (Winter semester
        1936/37), ed. B. Heimbüchel, 1985, XII, 298p.
        <br />
        GA-44. Nietzsches metaphysische Grundstellung im abendländischen Denken:
        Die ewige Wiederkehr des Gleichen (Summer semester 1937)
        <br />
        GA-45. Grundfragen der Philosophie. Ausgewählte "Probleme" der "Logik"
        (Winter semester 1937/38), ed. F.-W. von Herrmann, 1984, 2nd edn. 1992,
        XIV, 234p.
        <br />
        GA-46. Zur Auslegung von Nietzsches II. Unzeitgemässer Betrachtung
        (Winter semester 1938/39), ed. H.-J. Friedrich, 2003, XII, 382p.
        <br />
        GA-47. Nietzsches Lehre vom Willen zur Macht als Erkenntnis (Summer
        semester 1939), ed. E. Hanser, 1989, XVI, 330p.
        <br />
        GA-48. Nietzsche: Der europäische Nihilismus (2nd trimester 1940), ed.
        P. Jaeger, 1986, XVI, 340p.
        <br />
        GA-49. Die Metaphysik des deutschen Idealismus.
        <br />
        GA-50. Nietzsches Metaphysik (announced for the winter semester 1941/42)
        <br />
        GA-51. Grundbegriffe (Summer semester 1941), ed. P. Jaeger, 1981, 2nd
        edn. 1991, X, 128p.
        <br />
        GA-52. Hölderlins Hymne "Andenken" (Winter semester 1941/42), ed. C.
        Ochwaldt, 1982, 2nd edn. 1992, X, 204p.
        <br />
        GA-53. Hölderlins Hymne "Der Ister" (Summer semester 1942), ed. W.
        Biemel, 1984, 2nd edn. 1993, VIII, 210p.
        <br />
        GA-54. Parmenides (Winter semester 1942/43), ed. M. S. Frings, 1982, 2nd
        edn. 1992, XII, 252p.
        <br />
        GA-55. Heraklit
        <br />
        GA-56/57. Zur Bestimmung der Philosophie. 1999, X, 226p.
        <br />
        GA-58. Grundprobleme der Phänomenologie (Winter semester 1919/20), ed.
        H.-H. Gander, 1992, X, 274p.
        <br />
        GA-59. Phänomenologie der Anschauung und des Ausdrucks. Theorie der
        philosophischen Begriffsbildung (Summer semester 1920.
        <br />
        GA-60. Phänomenologie des religiösen Lebens.
        <br />
        GA-61. Phänomenologische Interpretationen zu Aristoteles. Einführung in
        die phänomenologische Forschung (Winter semester 1921/22)
        <br />
        GA-62. Phänomenologische Interpretation ausgewählter Abhandlungen des
        Aristoteles zu Ontologie und Logik (Summer semester 1922).
        <br />
        GA-63. Ontologie. Hermeneutik der Faktizität (Summer semester 1923), ed.
        K. Bröcker-Oltmanns, 1988, 2nd edn. 1995, XII, 116p.
        <br />
        GA-64. Der Begriff der Zeit (1924), ed. F.-W. von Herrmann, 2004, VI,
        134p.
        <br />
        GA-65. Beiträge zur Philosophie (Vom Ereignis) (1936–1938), ed. F.-W.
        von Herrmann, 1989, 2nd edn. 1994, XVI, 522p.
        <br />
        GA-66. Besinnung (1938/39), ed. F.-W. von Herrmann, 1997, XIV, 438p.
        <br />
        GA-67. Metaphysik und Nihilismus, ed. H.-J. Friedrich, 1999, XII, 274p.
        <br />
        GA-68. Hegel, ed. I. Schüssler, 1993, X, 154p.
        <br />
        GA-69. Die Geschichte des Seyns, ed. P. Trawny, 1998, XII, 230p. Second
        edition 2012. XII, 230p.
        <br />
        GA-70. Über den Anfang, ed. P.-L. Coriando, 2005, XII, 200p.
        <br />
        GA-71. Das Ereignis, ed. F.-W. von Herrmann, 2009. XXII, 348p.
        <br />
        GA-72. Die Stege des Anfangs (1944)
        <br />
        GA-73. Zum Ereignis-Denken, ed. P. Trawny, 2013, 1496p. Published in two
        volumes.
        <br />
        GA-74. Zum Wesen der Sprache und Zur Frage nach der Kunst, ed. T.
        Regehly, 2010. XIV, 214p.
        <br />
        GA-75. Zu Hölderlin / Griechenlandreisen, ed. C. Ochwadt, 2000, VI,
        408p.
        <br />
        GA-76. Leitgedanken zur Entstehung der Metaphysik, der neuzeitlichen
        Wissenschaft und der modernen Technik, ed. C. Strube, 2009. VIII, 408p.
        <br />
        GA-77. Feldweg-Gespräche (1944/45), ed. I. Schüssler, 1995, 2nd. edn.
        2007, VI, 250p.
        <br />
        GA-78. Der Spruch des Anaximander (1946), ed. I. Schüssler, 2010, XXII,
        352p.
        <br />
        GA-79. Bremer und Freiburger Vorträge, ed. P. Jaeger, 1994, 2nd edn.
        2005, VI, 182p.
        <br />
        GA-80. Vorträge, ed. G. Neumann.
        <br />
        GA-81. Gedachtes, ed. P.-L. Coriando, 2007, XX, 360p.
        <br />
        GA-82. Zu eigenen Veröffentlichungen, ed. F.-W. von Herrmann, 2018.
        XXVIII, 594p.
        <br />
        GA-83. Seminare: Platon – Aristoteles – Augustinus, ed. M. Michalski,
        2012, XXVI, 682p.
        <br />
        GA-84. Seminare: Leibniz – Kant – Schiller, ed. G. Neumann, 2013,
        XXXVIII, 894p.
        <br />
        GA-85. Seminar: Vom Wesen der Sprache.
        <br />
        GA-86. Seminare: Hegel – Schelling, ed. P. Trawny, 2011, XLII, 906p.
        <br />
        GA-87. Seminare: Nietzsche: Seminare 1937 und 1944, ed. P. von
        Ruckteschell, 2004, XX, 324p.
        <br />
        GA-88. Seminare (Übungen) 1937/38 und 1941/42.
        <br />
        GA-89. Zollikoner Seminare, ed. P. Trawny, 2017, XXXII, 880p.
        <br />
        GA-90. Zu Ernst Jünger, ed. P. Trawny, 2004, XVI, 472p.
        <br />
        GA-91. Ergänzungen und Denksplitter
        <br />
        GA-92. Ausgewählte Briefe I
        <br />
        GA-93. Ausgewählte Briefe II
        <br />
        GA-94. Überlegungen II-VI (Schwarze Hefte 1931–1938), ed. Peter Trawny,
        2014, VI, 536p.
        <br />
        GA-95. Überlegungen VII-XI (Schwarze Hefte 1938/39), ed. Peter Trawny,
        2014, VI, 456p.
        <br />
        GA-96. Überlegungen XII-XV (Schwarze Hefte 1939–1941), ed. Peter Trawny,
        2014, VI, 286p.
        <br />
        GA-97. Anmerkungen I-V (Schwarze Hefte 1942–1948), ed. Peter Trawny,
        2015, VI, 560p.
        <br />
        GA-98. Anmerkungen VI-IX (Schwarze Hefte 1948/49-1951), ed. Peter
        Trawny, 2018, VI, 422p.
        <br />
        GA-99. Vier Hefte I: Der Feldweg / Vier Hefte II: Durch Ereignis zu Ding
        und Welt, (1947–1950)'', edited Peter. Trawny, 2019, 190p.
        <br />
        GA-100. Vigiliae I, II / Notturno, (1952/53 bis 1957), edited Peter
        Trawny, 2020, 304p.
        <br />
        GA-101. Winke I, II. (Schwarze Hefte 1957–1959), edited Peter Trawny,
        2020, 220p.
        <br />
        GA-102. Vorläufiges I-IV. (Schwarze Hefte 1963 -1970), edited Peter
        Trawny, (Nov 2021), 448p. ISBN-13: 978-3465026907.
        {/*  */}
        <br />
        <br />
        <b>Other Refrences:</b>
        <br />
        AGG: Jaeger, W., Aristoteles; Grundlegung einer Geschichte seiner
        Entwicklung, Berlin Weidmannsche Buchhandlung 1923
        <br />
        SMA: Jaeger, Studien zur Entstehungsgeschichte der Metaphysik des
        Aristoteles, Berlin Weidmannsche Buchhandlung 1912
        <br />
        PdA: Brentano, F., Psychologie des Aristoteles, Mainz , Verlag von Franz
        Kirchheim. 1867
        <br />
        MaD: Safranski, R., Ein Meister aus Deutschland
        <br />
        LPB: Ulfig, A., Lexikon der philosophischen Begriffe
      </Typography>
    ),
  };

  return (
    window.scrollTo(0, 0),
    (
      <div>
        <Grid container>
          <Grid item xs={0} sm={0} md={2}></Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Card>
              <CardMedia component="img" height="260" image={variables.image} />
              <CardContent>
                <Typography gutterBottom align="right" component="div">
                  <h1>{variables.title}</h1>
                </Typography>
                <Typography>{variables.text}</Typography>
              </CardContent>
              <CardActions>
                <Button href="#/heidegger" size="small">
                  <h3>بازگشت</h3>
                </Button>
              </CardActions>
            </Card>
            <BottomLinks />
          </Grid>
        </Grid>

        <Footer />
      </div>
    )
  );
}

export default Text;
