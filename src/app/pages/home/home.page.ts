import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { Persona } from '../../model/Persona';
import { LoadingController } from '@ionic/angular';
import jsQR, { QRCode } from 'jsqr';
import { Animation, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {

  @ViewChild('titulo', { read: ElementRef, static: true}) titulo: ElementRef;
  @ViewChild('bienvenido', { read: ElementRef, static: true}) bienvenido: ElementRef;
  @ViewChild('user', { read: ElementRef, static: true}) user: ElementRef;
  @ViewChild('video', { static: false })
  private video: ElementRef;
  @ViewChild('canvas', { static: false })
  private canvas: ElementRef;
  @ViewChild('fileinput', { static: false })
  private fileinput: ElementRef;

  public usuario: Usuario;
  public persona: Persona = new Persona();
  public escaneando = false;
  public datosQR = '';
  public loading: HTMLIonLoadingElement = null;

  public constructor(
        private activeroute: ActivatedRoute
      , private router: Router
      , private alertController: AlertController
      , private animationController: AnimationController
      , private loadingController: LoadingController) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) { 
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      } else {
        this.router.navigate(['/login']);
      }
  });
}

public ngOnInit(): void {
}

public mostrarNombreUsuario(): string {
  if (this.usuario.nombreUsuario === 'atorres@duocuc.cl') {
    return 'Ana Torres Leiva';
  }
  else if (this.usuario.nombreUsuario === 'avalenzuela@duocuc.cl'){
    return 'Alberto Valenzuela Nuñez'
  }
  else if (this.usuario.nombreUsuario === 'cfuentes@duocuc.cl'){
    return 'Carla Fuentes Gonzalez'
  }
}

public ngAfterViewInit(): void {
  const animation = this.animationController
    .create()
    .addElement(this.titulo.nativeElement)
    .iterations(Infinity)
    .duration(5000)
    .fromTo('transform', 'translate(0%)', 'translate(100%)')
    .fromTo('opacity', 1, 1);

  animation.play();

  const animation2 = this.animationController
    .create()
    .addElement(this.bienvenido.nativeElement)
    .duration(3000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, background: 'yellow' },
      { offset: 0.5, background: 'orange' },
      { offset: 1, background: 'green' }
    ]);

  animation2.play();

  const animation3 = this.animationController
    .create()
    .addElement(this.user.nativeElement)
    .iterations(Infinity)
    .duration(7000)
    .fromTo('opacity', 0, 1);

  animation3.play();
  this.limpiarDatos();
}

  public limpiarDatos(): void {
    this.escaneando = false;
    this.datosQR = '';
    this.loading = null;
    (document.getElementById('input-file') as HTMLInputElement).value = '';
  }
  public async comenzarEscaneoQR() {
    this.limpiarDatos();
    const mediaProvider: MediaProvider = await navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'}
    });
    this.video.nativeElement.srcObject = mediaProvider;
    this.video.nativeElement.setAttribute('playsinline', 'true');
    this.loading = await this.loadingController.create({});
    await this.loading.present();
    this.video.nativeElement.play();
    requestAnimationFrame(this.verificarVideo.bind(this));
  }

  public obtenerDatosQR(source?: CanvasImageSource): boolean {
    let w = 0;
    let h = 0;
    if (!source) {
      this.canvas.nativeElement.width = this.video.nativeElement.videoWidth;
      this.canvas.nativeElement.height = this.video.nativeElement.videoHeight;
    }

    w = this.canvas.nativeElement.width;
    h = this.canvas.nativeElement.height;
    console.log(w + ' ' + h);

    const context: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
    context.drawImage(source? source : this.video.nativeElement, 0, 0, w, h);
    const img: ImageData = context.getImageData(0, 0, w, h);
    const qrCode: QRCode = jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' });
    if (qrCode) {
      this.escaneando = false;
      this.datosQR = qrCode.data;
    }
    return this.datosQR !== '';
  }

  async verificarVideo() {
    if (this.video.nativeElement.readyState === this.video.nativeElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.escaneando = true;
      }
      if (this.obtenerDatosQR()) {
        console.log(1);
      } else {
        if (this.escaneando) {
          console.log(2);
          requestAnimationFrame(this.verificarVideo.bind(this));
        }
      }
    } else {
      console.log(3);
      requestAnimationFrame(this.verificarVideo.bind(this));
    }
  }

  public detenerEscaneoQR(): void {
    this.escaneando = false;
  }

  public cargarImagenDesdeArchivo(): void {
    this.limpiarDatos();
    this.fileinput.nativeElement.click();
  }

  public verificarArchivoConQR(files: FileList): void {
    const file = files.item(0);
    const img = new Image();
    img.onload = () => {
      this.obtenerDatosQR(img);
    };
    img.src = URL.createObjectURL(file);
  }
}
