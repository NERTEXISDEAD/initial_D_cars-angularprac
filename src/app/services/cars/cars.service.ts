import { Injectable } from '@angular/core';
import { Car } from 'src/app/shared/models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCarById(id: number): Car {
    return this.getAll().find(car => car.id == id)!;
  }

  getAll(): Car[] {
    return [
      {
        id: 1,
        name: 'Subaru Impreza WRX STI',
        year: 1998,
        plate: '13-600, classification 52',
        color: 'Sonic Blue Mica/Cool Gray Metallic',
        custom_parts: 'STI WR Car-type front bumper (different from the limited run 22B STi Version), STI Sports interior trim (red accented), STI Sports Momo steering wheel (black with red accents), Bridgestone Potenza RE-01 tires, Original Sports exhaust',
        imageUrl: 'assets/img/bunta.jpg'
      },
      {
        id: 2,
        name: 'Honda Civic Type R (EK9)',
        year: 1998,
        plate: '56-838, classification 50',
        color: 'Sunlight Yellow',
        custom_parts: 'Spoon grille, Spoon wing, EuroR muffler, Spoon mirrors, Volk TE37 Super Lap Black Edition wheels',
        imageUrl: 'assets/img/civic.jpg'
      },
      {
        id: 3,
        name: 'Honda NSX (NA1)',
        year: 1994,
        plate: '40-298, classification 39',
        color: 'Formula Red',
        custom_parts: 'Full ADVANCE Flatout GT Parts, BBS LM wheels (gold), 1999 NSX Type-S ABS and drive-by-wire system',
        imageUrl: 'assets/img/honda nsx.jpg'
      },
      {
        id: 4,
        name: 'Mitsubishi Lancer Evolution V',
        year: 1998,
        plate: '12-159, classification 30',
        color: 'Scotia White',
        custom_parts: 'Volk TE37 Rims, Carbon fiber mirrors, HKS muffler, and fog light covers',
        imageUrl: 'assets/img/lancer evolution.jpg'
      },
      {
        id: 5,
        name: 'Nissan Skyline 25GT Turbo',
        year: 1999,
        plate: '22-936, classification 34',
        color: 'Dark Blue Pearl',
        custom_parts: 'SSR Team Sticker, Fujitsubo Sports Muffler, Custom front bumper, and Panasport G7/C5C2 Wheels',
        imageUrl: 'assets/img/skyline 25gt.jpg'
      },
      {
        id: 6,
        name: 'Toyota Supra RZ',
        year: 1993,
        plate: '81-973, classification 35',
        color: 'Super White',
        custom_parts: 'Bomex Type 2 front lip, Bomex Type 1 side skirts, JZA80 RZ-S rear under spoiler, TRD Muffler, Advan RCII wheels',
        imageUrl: 'assets/img/supra rz.jpg'
      },
      {
        id: 7,
        name: 'Toyota MR2 G-Limited',
        year: 1996,
        plate: '37-597, classification 58',
        color: 'Strong Blue Metallic',
        custom_parts: 'TRD muffler and TRD Alumi-K wheels',
        imageUrl: 'assets/img/toyota mr2.jpg'
      },
      {
        id: 8,
        name: 'Nissan Silvia Spec R Aero (S15)',
        year: 1999,
        plate: '16-801, classification 503',
        color: 'Brilliant Blue',
        custom_parts: 'GP Sports Zero-One D1GP Body Kit',
        imageUrl: 'assets/img/silvia.jpg'
      },
      {
        id: 9,
        name: 'Mitsubishi Lancer Evolution VI GSR',
        year: 1999,
        plate: '86-502, classification 36',
        color: 'Scotia White',
        custom_parts: 'Spoiler removed, HKS Muffler, Ralliart Header',
        imageUrl: 'assets/img/lancer 6.jpg'
      },
      {
        id: 10,
        name: 'Nissan Silvia K’s (S13)',
        year: 1988,
        plate: '51-745, classification 58',
        color: 'Lime Green Two-tone',
        custom_parts: 'Nissan S13 Silvia K’s Aero body kit, S13 Dia Selection headlamps, BRIDE racing seat, NISMO LM GT4 wheels (anime), SSR Mark II R wheels (manga and Arcade Stage games), Nissan S13 Exhaust, and SpeedStars Sticker',
        imageUrl: 'assets/img/Nissan Silvia.jpg'
      },
      {
        id: 11,
        name: 'Toyota Corolla Levin SR (AE85)',
        year: 1984,
        plate: '11-009, classification 54',
        color: 'High Tech White',
        custom_parts: 'oyota Door Visor, Work Ewings Rims, AE86 OEM Aero Grille, TRD Sports Muffler, Momo Steering Wheel, and SpeedStars Sticker Engine: AE85 1.5 L 8v 3A-U + Bolt-on turbo, tuned to 150 hp',
        imageUrl: 'assets/img/ae85.jpg'
      },
      {
        id: 12,
        name: 'Toyota MR-S S-Edition',
        year: 2001,
        plate: '56-824, classification 500',
        color: 'Silver Metallic',
        custom_parts: 'Toyota Door Visor, Work Ewings Rims, AE86 OEM Aero Grille, TRD Sports Muffler, Momo Steering Wheel, and SpeedStars Sticker Engine: AE85 1.5 L 8v 3A-U + Bolt-on turbo, tuned to 150 hp',
        imageUrl: 'assets/img/Toyota MR-S.jpg'
      },
      {
        id: 13,
        name: 'Mazda RX-7 Type R ',
        year: 1991,
        plate: '63-887 classification 37',
        color: 'Competition Yellow Mica',
        custom_parts: 'Mazda painted FRP front lip, Unknown wide rear spoiler, Keisuke-made Rims, Mazdaspeed turbo gauge, Mazdaspeed suspension kit, Mazdaspeed muffler, Recaro bucket racing seats & Mazdaspeed steering wheel',
        imageUrl: 'assets/img/Mazda RX-7.jpg'
      },
      {
        id: 14,
        name: 'Nissan 180SX Type II (RPS13)',
        year: 1989,
        plate: '11-305, classification 55',
        color: 'White',
        custom_parts: 'Nissan fog lamps and front lip, Nissan 180SX Type III Side Skirts and Rear Spoiler, Kenji-made wheels, Sports muffler, and SpeedStars Sticker',
        imageUrl: 'assets/img/Nissan 180SX.jpg'
      },
      {
        id: 15,
        name: 'Nissan Silvia Q’s Aero',
        year: 1995,
        plate: '35-918, classification 72',
        color: 'Super Clear Red',
        custom_parts: 'Rear Windshield “Silvia” Banner, Primax 333 wheels, Nissan S14 Exhaust, rally tuned drivetrain, RedSuns Sticker (until 4th Stage)',
        imageUrl: 'assets/img/Nissan Silvia Q’s Aero.jpg'
      },
      {
        id: 16,
        name: 'Mitsubishi Lancer Evolution VII',
        year: 2001,
        plate: '25-645, classification 330',
        color: 'Dandelion Yellow',
        custom_parts: 'C-West Front bumper, Creative Sports side step and rear under spoiler, Voltex GT-Wing, Ganador side mirrors, Creative Sports hood, Roll Cage, Bucket Racing Seats, Defi Gauges, Momo Steering Wheel, HKS Turbo, Mine’s Muffler, Ralliart Header & HKS F-Con Pro ECU, Racing Hart rims, and C-West painted carbon trunk',
        imageUrl: 'assets/img/Mitsubishi Lancer Evolution VII.jpg'
      },
      {
        id: 17,
        name: 'Mitsubishi Lancer Evolution III GSR',
        year: 1995,
        plate: '30-395, classification 58',
        color: 'Pyrenees Black',
        custom_parts: 'Ralliart Muffler, Rally-style Anti-Lag “Misfiring System”, Recaro Bucket Seats & Emperor Sticker',
        imageUrl: 'assets/img/Mitsubishi Lancer Evolution III.jpg'
      },
      {
        id: 18,
        name: 'Ẽfini RX-7 Type R (FD3S)',
        year: 1993,
        plate: '54-369, classification 39',
        color: 'Brilliant Black',
        custom_parts: '1998 FD3S Spoiler, One-off Custom Hood and Muffler, Border Aero Kit, Knight Sport Aero Mirrors Type 1, and RE-Amemiya AW-7 Rims',
        imageUrl: 'assets/img/Ẽfini RX-7 Type R.jpg'
      },
      {
        id: 19,
        name: 'Nissan Skyline GT-R V-spec',
        year: 2002,
        plate: '38-274, classification 39',
        color: 'Millennium Jade Metallic',
        custom_parts: 'Yokohama Super Advan Racing SA3R wheels (silver), Amuse R1 TITAN exhaust system, Apex’i sports catalyser, Nismo front bumper (manga & games), & Brembo racing brakes',
        imageUrl: 'assets/img/Nissan Skyline GT-R V-spec.jpg'
      },
      {
        id: 20,
        name: 'Nissan Sileighty',
        year: 1996,
        plate: '37-586 (Extra Stage), 78-547 (Battle/Fifth/Final/Arcade Stage)',
        color: 'Impact Blue',
        custom_parts: 'Nissan Silvia K’s Aero front bumper and side skirts, Supermade whale tail rear spoiler, BBS RM wheels, Nissan S13 exhaust, Recaro racing seats (Anime)',
        imageUrl: 'assets/img/Nissan Sileighty.jpg'
      },
      {
        id: 21,
        name: 'Celica GT-Four (ST205)',
        year: 1998,
        plate: '27-431, classification 74',
        color: 'Super Black V',
        custom_parts: 'C-ONE muffler, C-ONE spoiler, C-ONE hood, unknown 6-spoke wheels (White)',
        imageUrl: 'assets/img/Celica GT-Four.jpg'
      },
      {
        id: 22,
        name: 'Toyota Altezza RS200 (SXE10)',
        year: 2000,
        plate: '17-919, classification 33',
        color: 'Silver Metallic',
        custom_parts: 'TRD N1/N-Plus Parts with OEM Tail Light Covers',
        imageUrl: 'assets/img/Toyota Altezza RS200.jpg'
      },
      {
        id: 23,
        name: 'Nissan Skyline GT-R V-Spec II',
        year: 1994,
        plate: '37-564, classification 33',
        color: 'Gun Gray Metallic',
        custom_parts: 'NISMO front bumper, GT wing, roll cage, Large Radius Racing Muffler, 650 HP RB26DETT, OEM GT-R R33 wheels (front only in manga and arcade, both front and rear in anime), Work Meister S1 rear wheels (manga and arcade only)',
        imageUrl: 'assets/img/Nissan Skyline GT-R V-Spec II.jpg'
      },
      {
        id: 24,
        name: 'Savanna RX-7 Infini III (FC3S)',
        year: 1990,
        plate: '13-137, classification 58',
        color: 'Crystal White',
        custom_parts: 'RE Amemiya Kouki Full Cowl SPL Front Bumper with Fixed HID Headlights, Garage Kagotani Carbon Fiber Hood, RE Amemiya Rear Side Step, FreeStyle GT Wing, Custom Single Exhaust (right side), Ryosuke-made side mirrors, SSR Type C Rims (Bronze), Custom Roll Cage, MOMO Steering Wheel.',
        imageUrl: 'assets/img/Savanna RX-7 Infini III.jpg'
      },
      {
        id: 25,
        name: 'Nissan Fairlady Z (Z33)',
        year: 2003,
        plate: '69-556, classification 301',
        color: 'Burning Red',
        custom_parts: 'Ings N-Spec Full body kit, Ings bonnet, Ings LX front fenders, Ings rear wing, Ings TS06 Forged Racing wheels (Anime), Ings LX Sport LM VII wheels (Manga and Arcade), Auto Produce Boss twin separate mufflers, Mine’s carbon mirrors (Anime only), Front window sun strip (manga and arcade), Bolt-on turbo kit',
        imageUrl: 'assets/img/Nissan Fairlady Z.jpg'
      },
      {
        id: 26,
        name: 'Suzuki Cappuccino (EA11R)',
        year: 1995,
        plate: '35-218, classification 71',
        color: 'Cordoba Red',
        custom_parts: 'Elite SPL Front Bumper, Elite SPL Rear Spoiler, Racing Gauges (180 km/h speedometer and 9500RPM tachometer upgrade), Gold EA11R Rims, Unknown sports muffler',
        imageUrl: 'assets/img/Suzuki Cappuccino.jpg'
      },
      {
        id: 27,
        name: 'Mazda Roadster RS (NB8C)',
        year: 1999,
        plate: '37-125, classification 501',
        color: 'Evolution Orange Mica',
        custom_parts: 'BIM Creative Studio Downhill Special AE031 rims (Black), Garage Vary Type N Aero Kit, Garage Vary 2D GT Wing (High Mount), Momo Steering Wheel, RS Aizawa ITBs, Custom Cat-Back Muffler & Header, Mazda Detachable Hard Roof Top (Black)',
        imageUrl: 'assets/img/Mazda Roadster RS.jpg'
      },
      {
        id: 28,
        name: 'Mitsubishi Lancer Evolution IV RS',
        year: 1996,
        plate: '46-637, classification 78',
        color: 'Scotia White',
        custom_parts: 'Rear Spoiler LED brake lights removed (Early arcade games), Evo IV GSR OEM wheels, Brembo 4-pot Calipers, Large Intercooler, Bucket Racing Seats, “Monster” Hood Sticker, Custom Rally Muffler & Emperor Sticker',
        imageUrl: 'assets/img/Mitsubishi Lancer Evolution IV.jpg'
      },
      {
        id: 29,
        name: 'Honda Civic SiR II',
        year: 1995,
        plate: '32-145, classification 59, 46-037 (Extra Stage and Fifth Stage onwards), 6-270 (New Initial D Movie)',
        color: 'Milano Red',
        custom_parts: 'Toda high compression pistons (balanced to the connecting rods), lightweight flywheel, Exhaust manifold; custom muffler; sports computer; Mugen Bucket Seats, Mugen front end, Mugen RNR wheels; OEM Honda door visors; NightKids Sticker (Arcade Stage 4 onwards)',
        imageUrl: 'assets/img/Honda Civic SiR II.jpg'
      },
      {
        id: 30,
        name: 'Toyota Trueno 2door (AE86)',
        year: 1986,
        plate: '12-186, classification 57',
        color: 'High-Tech Two-Tone',
        custom_parts: 'Toyota OEM Rear Spoiler, TRD Sports Muffler, RS Watanabe Eight-Spoke F8 wheels, Cusco 7-Point Bolt-On Roll Bar, OEM AE101 Throttle Bodies, Black Valve Cover, TODA Cams (272/272), TRD 0.8mm Gasket, TODA Cam Pulleys, TODA Air Intake, Tomei Pistons, TODA Conn. Rods, TODA Header, FREEDOM ECU, TODA Timing Belt, TRD Plug Wires, TODA Valves, OEM AE111 Forged Crankshaft, & AE92 Kouki Redtop Block',
        imageUrl: 'assets/img/Toyota Sprinter Trueno 2door.jpg'
      },
      {
        id: 31,
        name: 'Honda Integra Type R (DC2)',
        year: 1998,
        plate: '32-094, classification 55',
        color: 'Championship White',
        custom_parts: 'Spoon Carbon Bonnet, SSR Type V wheels (Black), aftermarket turbocharger, Todo School Original Muffler',
        imageUrl: 'assets/img/Honda Integra Type R.jpg'
      },
      {
        id: 32,
        name: 'Toyota Sprinter Trueno (AE86)',
        year: 1983,
        plate: '13-954, classification 55',
        color: 'High Tech Two-Tone',
        custom_parts: 'Cibié T353 Fog Lights, RS Watanabe Eight Spoke F8-Type Wheels (Black), TRD 2-Way LSD, TRD Crossed 3 w/ 4.778 Final Drive (Fourth Stage), TRD Crossed 5 w/ 5.375 Final Drive (2nd and 3rd Stage), Fujitsubo MC50 Muffler, OEM Door Visors (Until Fifth Stage)',
        imageUrl: 'assets/img/Toyota Sprinter Trueno GT-APEX.jpg'
      },
      {
        id: 33,
        name: 'Todo School Spoon Civic Type R',
        year: 1998,
        plate: '10-547, classification 57',
        color: 'Sunlight Yellow',
        custom_parts: 'Spoon SW388 Rims, Momo Steering Wheel w/Spoon Horn Button, Spoon Exhaust, Spoon Mirrors, Spoon Carbon Fiber Hood, Spoon Front Bumper, Bucket Racing Seats, Spoon 11,000 RPM Gauge Cluster, Spoon Damper Kit, Spoon Brakes, and Advan Sticker',
        imageUrl: 'assets/img/Todo School Spoon Civic Type R Demo Car.jpg'
      },
      {
        id: 34,
        name: 'Eunos Roadster NA Package (NA6CE)',
        year: 1991,
        plate: '86-596, classification 55',
        color: 'Classic Red',
        custom_parts: 'Mazda Roadster 1993 Wheel, Mazda Eunos Roadster Skirt Kit with Mud Guards, Mazda Eunos Roadster Spoiler, Mazda Roadster 1993 Mirrors, Mazda Detachable Hard Roof top, Nardi Classic Steering Wheel, Bucket Racing Seats, RS Aizawa Individual Throttle Bodies',
        imageUrl: 'assets/img/Eunos Roadster NA Package.jpg'
      },
      {
        id: 35,
        name: 'Honda S2000 Type-V (AP1)',
        year: 2000,
        plate: '71-109, classification 35',
        color: 'Long Beach Blue Pearl',
        custom_parts: 'MPF Front Bumper, Cusco 3D GT Wing, MUGEN MF-10 Wheels, J’s Racing Bonnet, MPF SSP Single Exhaust',
        imageUrl: 'assets/img/Honda S2000 Type-V.jpg'
      },
      {
        id: 35,
        name: 'Toyota Corolla Levin (AE86)',
        year: 1985,
        plate: '73-212, classification 56',
        color: 'High Tech Two Tone',
        custom_parts: 'TRD N2 FRP Spoiler, 6-Point Roll Bar, TRD Carbon Fiber Hood, Intercooler Grille, Toyota OEMN Door Visor, AE92 4A-GZE engine swap (Stock supercharged 4A-GE), TRD N2 Aero Kit, Wataru-Made Mesh Rims (Black) (Early Arcade Stage games), Wataru-Made Gravel Rally Rims (White) (Anime and late Arcade Stage games), and ItalVolanti Admiral Red Trim Steering Wheel (Seen while turning on the Wipers against the FD)',
        imageUrl: 'assets/img/Toyota Corolla Levin GT APEX (AE86).jpg'
      },
    ]
  }
}
