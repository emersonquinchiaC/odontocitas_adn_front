
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CitaPage } from '../page/cita/cita.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cita: CitaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cita= new CitaPage();
    });
    it('Deberia Listar Citas',()=>{
        page.navigateTo();
        navBar.clickBotonCitas();      

        expect(0).toBe( cita.contarCitas());

    });

    it ('Deberia Crear una Cita', ()=>{
        const IDENTIFICACION_USUARIO='1234';
        const TIPO_CITA='control';
        const FECHA_INICIO='2020-06-23 10:50:00'

        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonCrearCita();
        cita.ingresarIdentificacionUsuario(IDENTIFICACION_USUARIO);
        cita.ingresarTipoCIta(TIPO_CITA);
        cita.ingresarFechaInicio(FECHA_INICIO);
        cita.clickGuardarCita();
        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it ('Deberia Editar una Cita', ()=>{
        const TIPO_CITA='control';
        const FECHA_INICIO='2020-06-23 10:50:00'

        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonEditarCita();
        cita.ingresarTipoCItaEditar(TIPO_CITA);
        cita.ingresarFechaInicioEditar(FECHA_INICIO);
        cita.clickBotonGuargarEditarCita();
        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

 

   
});
