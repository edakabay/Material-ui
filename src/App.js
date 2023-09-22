import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Course from './Course';
import cplus from './images/c++.png';
import csharp from './images/csharp.png';
import java from './images/java.png';
import javascript from './images/javascript.png';
import php from './images/php.png';
import python from './images/python.png';

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ marginTop: 10 }}>
          <Grid item xs={16} md={8} lg={4}>
            <Course
              image={cplus}
              title="C++"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
            <Course
              image={csharp}
              title="C#"
              description="C#, Microsoft'un teknoloji yığınındaki önemli bir bileşen olup, çeşitli uygulama türlerinin geliştirilmesi için kullanılır. Windows uygulamaları, oyunlar, web uygulamaları, mobil uygulamalar (Xamarin ile), veri tabanı uygulamaları ve daha fazlası için tercih edilen bir programlama dilidir."
            />
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
            <Course
              image={java}
              title="Java"
              description="Java, özellikle büyük ölçekli uygulamalar, masaüstü uygulamalar, mobil uygulamalar (Android için), web uygulamaları ve bulut tabanlı servisler gibi birçok farklı alanda yaygın olarak kullanılır. Java, taşınabilirliği, güvenliği ve geniş işlevselliği nedeniyle birçok endüstri ve kuruluş için tercih edilen bir programlama dilidir."
            />
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
            <Course
              image={javascript}
              title="JavaScript"
              description="
              JavaScript, web geliştirme için kullanılan bir programlama dilidir. İnternet tarayıcılarında çalışabilen bir tarayıcı tarafı betik dili olarak da bilinir. İnteraktif web sayfaları oluşturmak, kullanıcı etkileşimi sağlamak, veri işleme ve çeşitli web uygulamaları geliştirmek için kullanılır."
            />
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
            <Course
              image={php}
              title="PHP"
              description="PHP, Hypertext Preprocessor kısaltmasıyla bilinen, özellikle web geliştirme için tasarlanmış bir sunucu tarafı betik dilidir. PHP, sunucu tarafında çalıştığı için, web sunucuları üzerinde çalıştırılarak dinamik web sayfaları ve uygulamaları oluşturmak için kullanılır."
            />
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
            <Course
              image={python}
              title="Python"
              description="Python, genellikle veri bilimi, yapay zeka, bilimsel hesaplamalar ve web geliştirme gibi alanlarda büyük bir popülariteye sahiptir. Aynı zamanda yeni başlayanlar için öğrenmesi kolay olduğu için programlamaya ilk adım atanlar için de tercih edilen bir dil olmuştur."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
