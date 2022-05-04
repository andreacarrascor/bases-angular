import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    // nos indican qué componentes contiene este módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // qué elementos serán visibles afuera de este módulo
    exports: [
        ListadoComponent
    ],
    // módulos 
    imports: [
        // ofrece directivas como el ngFor o el ngIf
        CommonModule
    ]

})
export class HeroesModule {}