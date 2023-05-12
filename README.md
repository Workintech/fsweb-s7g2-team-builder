# Sprint Gün Projesi: Formlar - Takım Oluşturucu

Bu proje, sprint 7 gün 2'de öğrenilen kavram ve teknikleri uygulamanıza ve bunları somut bir projede uygulamanıza olanak tanır. Bugün, React'te Form yönetimini keşfettin. Input kontrolleri, semantik HTML, yayılma operatörü ve işlenmiş özellikler gibi bazı ES6 araçları ve sentetik eventler hakkında bilgi edindin. Projende bu konu ve ilkelerdeki yeterliliğini, her birini kullanarak bir uygulama oluşturarak göstereceksin.

## Talimatlar

Bu projede, takım üyelerini takip eden bir uygulama ayağa kaldıracaksın ve yapacaksın. Yeni takım oyuncusu ekleyebilecek ve hatta oyuncu detaylarını düzenleyebileceksin. İş akış mantığı (bussiness logic) için [linkteki](https://www.figma.com/file/AZhATY5zVq2teTzKJgCX8Q/S7G2?type=whiteboard&node-id=0%3A1&t=VeMRfMIHR7moH2zc-1) diagramı inceleyin Component ve Data Akış Diagramı. Bu diagram uygulamadaki componentler arasındaki ilişki göstermektedir. Ayrıca componentlerdeki veri iletişimi de detaylı olarak görselleştirilmiştir. Elinizdeki veri hangi componentten hangi componente yönlendirilmeli veya methodlar hangi component içinde tanımlanıp, hangi componente prop olarak aktarılmalı gibi soruların cevaplarını bulabilirsiniz. Lütfen diagramı okumaya başlamadan önce, diagramdaki nesnelerin ne anlama geldiğini ifade eden tabloyu (yine diagram içinde sol tarafta) inceleyiniz.


## Giriş

### Görev 1: Proje Kurulumu

- [ ] Projeyi forklayarak bir kopyasını oluşturun.
- [ ] Forku klonlayın
- [ ] `npx create-react-app .` komutuyla projeyi oluşturun (SONDAKİ NOKTAYA DİKKAT EDİN!) .
- [ ] `npm start` komutuyla projeyi başlatın
- [ ] Projeyi oluşturduğunuz reponun `main` branchi üzerinde commitleyin.
- [ ] Commitlerinizi pushlayın: git push origin `main`.

### Görev 2: MVP (MUÜ)

- [ ] Takım üyelerini içeren listeyi bir stateten render edin.
- [ ] Üye listesine yeni bir üye eklemek için bir form oluşturun.

#### State'inizin kurulumu

- [ ] `useState` hookunu import edin ve takım listesini tutacağınız bir state oluşturun.
- [ ] State değişkeninize kendi belirleyeceğiniz bir default değer atayın. Ekip üyelerinin listesini takip etmeniz gerekecek ve her ekip üyesinin kendileriyle ilişkilendirilmiş birkaç anahtar/değer(key/value) çifti olacaktır.
- [ ] Ekip üyeleri listenizi oluşturun.

#### Formunuzu Oluşturun

- [ ] Bir "Form.js" dosyası oluşturun ve form işaretçinizi oluşturun.
- [ ] `isim`, `email` ve `rol` gibi inputlar oluşturun (backend engineer, frontend engineer, tasarımcı, vb. Hayalgücünüzü kullanın).
- [ ] Formun _state_ ini düzenlemekten hangi bileşenin sorumlu olduğuna karar vermeniz gerekir. (`Form` un kendisi, ya da parentı `App`). Her yaklaşımın avantajları ve dezavantajları vardır.
- [ ] `App` içinde `Form` bileşeninizi render edin. `App` bileşeni, `Form` un işini yapması için gereken tüm callbackleri proplar aracılığıyla iletmelidir. (submit(gönder) e basıldığında takım üyeleri listesine yeni üyeler eklenecektir).

Şimdi MVP'yi tamamladığınız! Aşağıdaki esnek görevlere devam edin. Öncelikle üyeleri düzenleme özelliği ekleyin. Bu çok karmaşık bir süreç olduğu için, bu konuda size yardımcı olacak adımlar aşağıda belirtilmiştir.

### Görev 3: Düzenleme özelliği ekleyin (ESNEK)

Daha sonra ekip üyelerini düzenlemek için `Form` bileşenini yeniden kullanacağız. 
Bu hedefe tamamen kendi başına ulaşmayı deneyebilir veya aşağıdaki adımları takip edebilirsin. Bu adımlar, `Form` unun kendi state'ini koruduğunu varsayar.

#### App.js'yi üye güncellemek için hazırlama

- [ ] Oluşturduğun her üyenin yanına bir düzenleme butonu veya bir düzenleme simgesi(icon) ekleyin. 
Buton/simge tıklandığında, o üyeyi `App`da `duzenlenecekUye` adlı bir state'e aktarmak istiyoruz. Bunu yapacak fonksiyon, onu çağıran düğme/simge farklı bir bileşende olsa bile `App` içinde tanımlanmalıdır. Fonksiyonu alt bileşene proplarla aktarın.

#### Form.js'yi üye güncellemek için hazırlama

- [ ] `duzenlenecekUye` state ini `Form.js` ye aktarın
- [ ] Eğer `Form`, `props.duzenlenecekUye` 'yi alırsa, o zaman bu üye nesnesi formu kontrol eden state nesnenizi dolduracak. 
Şimdi, formumuzdan tıklanan üyeyi düzenlemek için böyle bir şey yapmak cazip gelebilir: `const [uye, setUye] = useState(props.duzenlenecekUye || {isim: '', email: '', rol: ''})` . 
Ancak bu, uygulamamızda oldukça büyük bir hataya neden olacak bir tuzaktır. Prop'lar state'i bu şekilde ayarlamak için kullanılıyorsa, prop değiştiğinde state özelliği GÜNCELLENMEYECEKTİR. Yani... bir şeyi proplar değiştiğinde uyumlu tutmak için ne tür bir teknik öğrendik? `useEffect`! `props.duzenlenecekUye` yi uyumlu tutabilmek için bir effect yazın. `props.duzenlenecekUye` değiştiğinde, effect `uye` state nesnesini yeni veriyle güncelleyecek. Bu, inputları güncellemeye çalıştığımız üye bilgileriyle dolduracaktır.

Düzenleme akışını kavramsallaştırmak zordur. Şöyle devam edelim:

1. Kullanıcı `Düzenle` butonu/simgesine tıkladığında, takım üyesini güncellemeye başlayacak
2. App içindeki bir fonksiyon çağırılarak tıklanan üyeyi `duzenlenecekUye` stateine aktaracak.
3. `Form.js`, `duzenlenecekUye` 'yi bir prop olarak alacak, ve eğer prop değişirse, oluşturduğumuz effect nesneyi state'e aktaracak ve formu tıklanan üyenin bilgileriyle dolduracak
4. Kullanıcı üye bilgilerini düzenleyecek
5. Of... Şimdi oluşturulan yeni veriyle ne yapacağız? Eğer formu gönderirsek, yeni bir üye ekleyecek 😫. Sakın korkmayın! Bir sonraki kısımda bunu düzelteceğiz!

#### Form gönderme (ESNEK Dev.)

Bu, şimdiye kadar yaptığımız en ilginç mimari parça... Ekip üyesi eklemek veya ekip üyesini düzenlemek için kullanılabilecek yeniden kullanılabilir bir form oluşturduk. Yapbozun son parçası şu: formu gönderdiğimiz zaman, bir "uyeEkle" fonksiyonu mu yoksa bir "uyeDuzenle" fonksiyonu mu çalıştırıyoruz? Ve form bunu nasıl bilecek? Aslında formumuz bir üye düzenleyip düzenlemeyeceğimizi biliyor çünkü `duzenlenecekUye` propumuz var. (Dipnot. Bunu bir booleanla da tutabiliriz - şunun gibi `guncellenecekMi`...)

Tamam, şimdi `Form.js`'miz düzenleme mi yapacak yoksa ekleme mi yapacak biliyor, şimdi uygulamayı bitirebiliriz!

- [ ] `App.js` içinde `uyeDuzenle` adında bir fonksiyon oluşturun. Bu fonksiyon bir ya da birden fazla takım üyesi bilgisini düzenleyip daha aşağıdaki bir bileşene bilgileri aktarsın. State'inizdeki veriniz için bir döngü oluşturmak, istenen takım üyesine ait nesneyi bulmak ve bilgileri güncellemek için bir yol bulmalısınız. `.map()` metodu bu görev için arkadaşınız olabilir. Verilerinizi doğrudan değiştirmekten de kaçınmalısınız. `...` yayılma operatörü bu noktada arkadaşınız olacak.
- [ ] Formu gönderirken `if` le `duzenlenecekUye` propu orada mı değil mi kontrol edin, buna göre doğru fonksiyonu çalıştırmak için  `if`  `else` bloklarıyla kontrolünüzü gerçekleştirin.

Yeniden kullanılabilirliğin gücünü gözlemleyin!

#### Daha Fazla Esnek Problemler

Gerekli görevleri bitirdikten sonra çalışmanı daha da ileri götürebilirsin. Bu hedefler, bu modülde öğrendiğin şeyler olabilir veya olmayabilir, ancak az önce çalıştığınız materyal üzerine inşa edilirler. Zaman tanıyın, sınırlarınızı zorlayın ve aşağıdaki isteğe bağlı hedeflere ulaşıp ulaşamayacağınıza bakın:

- [ ] Üyeleri düzenlemek için yukarıdaki adımları izleyin. Bunu yapmak zordur ve mimarisi de zordur. Ama pratik yapmak için harika bir projedir! 
Uygulama ayrıntılarına ve mimariye dikkat edin. Bunu başarmanın birçok yolu var. Bitirdiğinizde, başka bir yol düşünebilir misiniz?
- [ ] Her biri kendi ekip üyeleri listesine sahip birden çok ekibi takip edebilmeniz için Uygulamanızın başka bir katmanını oluşturun.
- [ ] Form validation hakkındaki çeşitli stratejileri inceleyin. Ekip üyelerinin adı olarak bir sayı girmeye çalışırsanız ne olur? Appiniz buna izin verir mi? Öyle mi? Fieldlardan birinin değerine bir fonksiyon girerseniz ne olur? Bu ne kadar tehlikeli olur? Bunu nasıl engellersin?
- [ ] Formları stilleyin. Input etiketleri için statelerine göre üzerine yazılması gerekebilecek bazı tarayıcı varsayılanları vardır (active, focus, hover, vb.); Bu CSS özelliklerini şık hale getirin.

