import React from "react";
import { Grid } from "@mui/material";
import BottomLinks from "../BottomLinks";
import Footer from "../Footer";
import PostSingle from "../PostSingle";

export default function Heidegger02() {
  return (
    window.scrollTo(0, 0),
    (
      <div>
        <Grid container>
          <Grid item xs={0} sm={0} md={1}></Grid>
          <Grid item xs={12} sm={12} md={10}>
            <PostSingle props={data} />
            <BottomLinks />
          </Grid>
        </Grid>

        <Footer />
      </div>
    )
  );
}

const data = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Sein-und-Zeit-Hauptbegriffe.svg/1280px-Sein-und-Zeit-Hauptbegriffe.svg.png",
  title: (
    <>
      درآمدی بر هستی و زمان
      <br />
      Sein und Zeit
    </>
  ),
  text: (
    <p>
      برای آن‌که بتوانیم تجسمی کلّی از ساختارِ کتاب برای خود فراهم آوریم
      می‌بایستی آن را به دو بخشِ موضوعی تقسیم نماییم. بخشِ نخست (فصل‌های یک و دو
      کتاب) تحلیلِ بنیادیِ مقدماتیِ دازاین Vorbereitende Fundamentalanalyse des
      Daseins که در آن ایده‌‌هایی هم‌چون: چراییِ لزوم طرحِ پرسش از معنای هستی،
      معنای دازاین، معنای در-جهان-هستنِ دازاین و معنای پروا Sorge به عنوانِ
      هستیِ دازاین مورد کنکاش قرار می‌گیرد. بخشِ دوم (فصل‌های سه تا شش کتاب)
      واکاویِ دقیق‌تر و روشنِ موضوعی‌ که در بخشِ اول نیز به طورِ ضمنی به آن
      پرداخته شده است: زمان‌مندی Zeitlichkeit و تاریخ‌مندی دازاین. این‌که دازاین
      زمان‌مند است، یعنی میرا بودنِ خود را ادراک می‌کند و به تمامیِ زندگانی‌اش
      تا به امروز، اِشرافِ ذهنی دارد. علاوه بر آن، ایده‌ی رابطه‌ی عمیقِ میانِ
      هستیِ دازاین و زمان‌مندی به طورِ دقیق پرورانیده می‌شود.
      <p></p>
      در طرحِ اولیه، برای کتابِ «هستی و زمان» بخشِ سومی نیز در نظر گرفته شده بود
      که قرار بود بدونِ محوریتِ دازاین (آن‌چه در کلِ کتاب جاری و حاکم است) به
      ارتباطِ بینِ هستی و زمان‌مندی بپردازد. با وجود آن‌که این بخش برای چاپ
      آماده شده بود، هایدگر ناپختگی‌هایی در آن یافت و از چاپ آن منصرف شد. اما
      این‌جا و آن‌جا دو اثر دیگرِ خود را به عنوانِ جایگزین‌های بخشِ ناتمامِ
      کتابِ «هستی و زمان» معرفی نمود: درآمدی بر متافیزیک Einführung in die
      Metaphysik و مشکلاتِ بنیادیِ پدیدارشناسی Grundprobleme der Phänomenologie.
      <p>
        برای کتابِ «هستی و زمان» مجلد دومی نیز طراحی شده بود که هایدگر از انجامِ
        آن نیز صرف‌نظر کرد.
      </p>
      <p>
        <b> سرآغازِ کتاب</b>
        <br />
        هایدگر، کتاب هستی و زمان را با اعلام این نکته که پرسش از معنایِ هستی
        فراموش شده است می‌آغازد و در ادامه، دلایلِ این فراموشیِ تاریخی را
        این‌گونه شرح می‌دهد: به فراموشی سپردنِ پرسش از معنایِ هستی و نپرداختنِ
        درست به آن، بر پایه‌ی انگاره‌های گوناگونی استوار است. نخست: هستی کلّی
        ترین مفهوم است (ارسطو). دوم: مفهومِ هستی تعریف‌ناپذیر است. سوم: هستی
        مفهومی بدیهی و آشکار است. در تاریخ فلسفه با استفاده از این‌گونه دلیل‌ها،
        تلاش کافی در جهتِ کنکاش در معنای هستی نشده است و با پیشِ پا افتاده
        انگاشتنِ معنای هستی، دیگر انگیزه‌ای برای اندیشیدن درباره ی معنای هستی و
        تاثیرِ آن بر زندگانیِ انسانی، در دستور کارِ سنتِ فلسفی قرار نگرفته است.
        هایدگر بر تمامِ این پیشداوری‌ها با دیده‌یِ تردید می نگرد و بر آن می‌شود
        تا در کتاب ِ «هستی و زمان» دست به این نافرمانیِ فلسفی زده و با نگاهی
        فنومنولوژیک، معنای هستی را بازپرسش کند. ایده‌ی محوری او در کتاب ِ «هستی
        و زمان»، طرحِ «پرسش از معنای هستی» است و نه پاسخ‌گویی به این پرسشِ
        بنیادین. هدف او به نمایش درآوردنِ چگونگیِ امکانِ طرحِ این پرسشِ
        فلسفی‌ست. چرا که شاید هرگز پاسخی راستین برای این پرسش در دسترسِ ما قرار
        نگیرد. تلاش او در هستی و زمان، پرداختن به موضوعِ دازاین و هستی، و
        ارتباطِ مستقیمِ آنها با موضوعِ زمان است و این پژوهش را در مقابلِ تمرکزِ
        سنتی و مدرن بر رویِ هستنده‌‌ها تعریف می‌کند.
      </p>
      <p>
        <center>
          <cite>
            <q>
              بررسی این پیش‌داوری‌ها [دلایلِ یک تا سه که در بالا بیان شد] در عین
              حال معلوم ساخت که نه فقط پرسش از هستی فاقد پاسخ است، بلکه حتا خودِ
              این پرسش نیز تاریک و فاقد جهت‌گیری است (GA-2 -§1).
            </q>
          </cite>
        </center>
      </p>
      اما ساختارِ این پرسش چه‌گونه است؟ هر پرسش دارای سه رکن است. نخست: آن‌چه
      درباره‌اش پرسش شده و موضوع پرسش است Gefragte. دوم: آن‌چه مورد نظر و مقصدِ
      نهایی و پایانی ِ پرسش است Erfragte و در مرکزِ رکن اول یعنی در موضوعِ پرسش
      پنهان است و سوم: آن‌چه/آن‌که پرسش از وی پرسیده می‌شود Befragte. در پرسش از
      هستی Sein، خودِ هستی، هم موضوعِ پرسش و هم مقصدِ پایانی ِ پرسش به‌شمار
      می‌آید و هستنده Seiende، آنی‌ست که پرسش از هستی، از وی پرسیده می‌شود.
      هستنده‌ای که هم پرسش از معنای هستی را طرح می‌کند و هم رکنِ سومِ پرسش از
      معنای هستی ست.
    </p>
  ),
};
