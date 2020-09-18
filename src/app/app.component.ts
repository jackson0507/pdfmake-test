import { Component } from '@angular/core';
import { InterestsData, InterestsGraphData, PerformanceData, AptitudeData, RecData1, RecData2 } from './hardcodedData'

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdfmake-test';
  careerScopeLogoSVG = '<svg width="786px" height="217px" viewBox="0 0 786 217" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Logo for SVG</title><g id="Logo-for-SVG" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect fill="#FFFFFF" x="0" y="0" width="786" height="217"></rect><g id="Group" transform="translate(531.000000, 80.000000)"><circle id="Oval" stroke="#0F4C81" stroke-width="7" cx="32" cy="32" r="32"></circle><path d="M32.4383562,13.1506849 C38.4341307,13.1506849 43.7909216,15.886499 47.3285013,20.1778995 C43.9961096,17.4309493 39.7250053,15.7808219 35.0684932,15.7808219 C24.4162065,15.7808219 15.7808219,24.4162065 15.7808219,35.0684932 C15.7808219,39.7250053 17.4309493,43.9961096 20.178348,47.3289498 C15.886499,43.7909216 13.1506849,38.4341307 13.1506849,32.4383562 C13.1506849,21.7860695 21.7860695,13.1506849 32.4383562,13.1506849 Z" id="Combined-Shape" fill="#0F4C81"></path></g><g id="Group-2" transform="translate(2.500000, 164.500000)" stroke="#0F4C81" stroke-linecap="square" stroke-width="3"><line x1="0.5" y1="1.5" x2="587.5" y2="1" id="Line"></line><line x1="637.5" y1="1.5" x2="746.5" y2="1" id="Line-Copy"></line></g><g id="CopyRight" transform="translate(753.000000, 76.000000)"><path d="M8.584,16 L8.584,12.736 L11.112,12.736 C11.304,12.736 11.448,12.7306667 11.544,12.72 L11.544,12.72 L13.832,16 L16.072,16 L13.496,12.32 C14.264,12.0213333 14.8533333,11.568 15.264,10.96 C15.6746667,10.352 15.88,9.62666667 15.88,8.784 C15.88,7.96266667 15.688,7.25333333 15.304,6.656 C14.92,6.05866667 14.368,5.6 13.648,5.28 C12.928,4.96 12.0826667,4.8 11.112,4.8 L11.112,4.8 L6.504,4.8 L6.504,16 L8.584,16 Z M11.016,11.024 L8.584,11.024 L8.584,6.56 L11.016,6.56 C11.9226667,6.56 12.6106667,6.752 13.08,7.136 C13.5493333,7.52 13.784,8.06933333 13.784,8.784 C13.784,9.49866667 13.5493333,10.0506667 13.08,10.44 C12.6106667,10.8293333 11.9226667,11.024 11.016,11.024 L11.016,11.024 Z" id="R" fill="#0F4C81" fill-rule="nonzero"></path><circle id="CopyRight-Circle" stroke="#0F4C81" stroke-width="2" cx="11" cy="11" r="11"></circle></g><g id="careerscpe" transform="translate(1.419000, 78.468000)" fill-rule="nonzero"><path d="M33.798,67.467 C43.215,67.467 50.955,64.629 58.308,57.405 L47.73,47.085 C43.86,50.955 38.829,52.374 33.798,52.374 C23.994,52.374 15.738,45.924 15.738,33.798 C15.738,22.704 23.478,14.964 34.056,14.964 C38.442,14.964 43.086,16.641 46.827,19.995 L56.76,9.546 C49.794,2.709 42.828,0.129 33.798,0.129 C15.351,0.129 2.84217094e-14,11.223 2.84217094e-14,33.798 C2.84217094e-14,56.373 15.351,67.467 33.798,67.467 Z M94.557,67.467 C101.652,67.338 111.585,63.726 115.197,56.244 L115.971,65.532 L130.806,65.532 L130.806,1.935 L115.713,1.935 L115.197,10.707 C111.585,4.386 103.458,0.387 94.944,0.387 C76.368,0.258 61.791,11.739 61.791,33.669 C61.791,55.986 75.723,67.596 94.557,67.467 Z M96.363,53.019 C85.914,53.019 77.529,45.795 77.529,33.669 C77.529,21.543 85.914,14.448 96.363,14.448 C121.131,14.448 121.131,53.019 96.363,53.019 Z M159.831,65.532 L159.831,31.992 C159.831,20.253 167.442,15.867 175.698,15.867 C180.858,15.867 183.825,17.286 187.05,19.995 L194.145,6.321 C190.662,2.838 184.341,0.258 177.762,0.258 C171.312,0.258 164.733,1.419 159.831,9.288 L158.67,1.935 L144.093,1.935 L144.093,65.532 L159.831,65.532 Z M232.2,67.209 C241.875,67.209 252.84,63.855 259.548,56.889 L249.486,46.956 C245.874,50.697 238.263,52.89 232.458,52.89 C221.364,52.89 214.527,47.214 213.495,39.345 L263.16,39.345 C265.611,13.158 252.324,1.0658141e-13 231.039,1.0658141e-13 C210.399,1.0658141e-13 197.241,13.932 197.241,33.282 C197.241,53.664 210.27,67.209 232.2,67.209 Z M248.067,26.316 L213.753,26.316 C216.075,18.06 223.041,13.932 231.555,13.932 C240.585,13.932 247.035,18.06 248.067,26.316 Z M307.407,67.209 C317.082,67.209 328.047,63.855 334.755,56.889 L324.693,46.956 C321.081,50.697 313.47,52.89 307.665,52.89 C296.571,52.89 289.734,47.214 288.702,39.345 L338.367,39.345 C340.818,13.158 327.531,1.0658141e-13 306.246,1.0658141e-13 C285.606,1.0658141e-13 272.448,13.932 272.448,33.282 C272.448,53.664 285.477,67.209 307.407,67.209 Z M323.274,26.316 L288.96,26.316 C291.282,18.06 298.248,13.932 306.762,13.932 C315.792,13.932 322.242,18.06 323.274,26.316 Z M366.231,65.532 L366.231,31.992 C366.231,20.253 373.842,15.867 382.098,15.867 C387.258,15.867 390.225,17.286 393.45,19.995 L400.545,6.321 C397.062,2.838 390.741,0.258 384.162,0.258 C377.712,0.258 371.133,1.419 366.231,9.288 L365.07,1.935 L350.493,1.935 L350.493,65.532 L366.231,65.532 Z" id="career" fill="#0F4C81"></path><path d="M432.408,67.725 C450.597,67.725 459.756,58.05 459.756,46.827 C459.756,29.928 444.534,27.219 432.537,26.445 C424.41,25.929 420.669,23.607 420.669,19.479 C420.669,15.48 424.797,13.158 432.279,13.158 C438.342,13.158 443.502,14.577 448.017,18.834 L456.789,8.514 C449.436,2.064 441.954,0.129 432.021,0.129 C420.411,0.129 405.189,5.289 405.189,19.995 C405.189,34.443 419.508,38.829 431.505,39.732 C440.535,40.248 444.147,42.054 444.147,46.44 C444.147,51.084 438.6,54.18 432.666,54.051 C425.571,53.922 415.251,50.181 410.736,45.15 L402.996,56.373 C412.284,66.048 422.346,67.725 432.408,67.725 Z M499.875,67.467 C509.292,67.467 517.032,64.629 524.385,57.405 L513.807,47.085 C509.937,50.955 504.906,52.374 499.875,52.374 C490.071,52.374 481.815,45.924 481.815,33.798 C481.815,22.704 489.555,14.964 500.133,14.964 C504.519,14.964 509.163,16.641 512.904,19.995 L522.837,9.546 C515.871,2.709 508.905,0.129 499.875,0.129 C481.428,0.129 466.077,11.223 466.077,33.798 C466.077,56.373 481.428,67.467 499.875,67.467 Z M620.547333,92.106 L620.547333,58.05 C625.062333,65.016 634.995333,67.08 641.703333,67.08 C662.085333,67.08 673.824333,52.374 673.824333,33.798 C673.824333,15.093 660.795333,0.516 641.187333,0.516 C633.963333,0.516 625.449333,3.612 620.547333,10.707 L619.515333,1.935 L604.809333,1.935 L604.809333,92.106 L620.547333,92.106 Z M640.026333,51.858 C629.319333,51.858 621.966333,43.731 621.966333,33.798 C621.966333,23.865 628.674333,15.738 640.026333,15.738 C651.378333,15.738 658.086333,23.865 658.086333,33.798 C658.086333,43.731 650.733333,51.858 640.026333,51.858 Z M717.555333,67.209 C727.230333,67.209 738.195333,63.855 744.903333,56.889 L734.841333,46.956 C731.229333,50.697 723.618333,52.89 717.813333,52.89 C706.719333,52.89 699.882333,47.214 698.850333,39.345 L748.515333,39.345 C750.966333,13.158 737.679333,-7.10542736e-15 716.394333,-7.10542736e-15 C695.754333,-7.10542736e-15 682.596333,13.932 682.596333,33.282 C682.596333,53.664 695.625333,67.209 717.555333,67.209 Z M733.422333,26.316 L699.108333,26.316 C701.430333,18.06 708.396333,13.932 716.910333,13.932 C725.940333,13.932 732.390333,18.06 733.422333,26.316 Z" id="scpe" fill="#FFAF12"></path></g><path d="M239,214 C241.986667,214 244.64,213.42 246.96,212.26 C249.28,211.1 251.08,209.46 252.36,207.34 C253.64,205.22 254.28,202.773333 254.28,200 C254.28,197.226667 253.64,194.78 252.36,192.66 C251.08,190.54 249.28,188.9 246.96,187.74 C244.64,186.58 241.986667,186 239,186 L239,186 L226.76,186 L226.76,214 L239,214 Z M238.76,209.6 L231.96,209.6 L231.96,190.4 L238.76,190.4 C240.813333,190.4 242.62,190.793333 244.18,191.58 C245.74,192.366667 246.94,193.486667 247.78,194.94 C248.62,196.393333 249.04,198.08 249.04,200 C249.04,201.92 248.62,203.606667 247.78,205.06 C246.94,206.513333 245.74,207.633333 244.18,208.42 C242.62,209.206667 240.813333,209.6 238.76,209.6 L238.76,209.6 Z M268.5,214 L268.5,186 L263.3,186 L263.3,214 L268.5,214 Z M288.24,214.4 C290.693333,214.4 292.773333,214.026667 294.48,213.28 C296.186667,212.533333 297.46,211.533333 298.3,210.28 C299.14,209.026667 299.56,207.626667 299.56,206.08 C299.56,204.266667 299.086667,202.826667 298.14,201.76 C297.193333,200.693333 296.053333,199.9 294.72,199.38 C293.386667,198.86 291.68,198.36 289.6,197.88 C288.08,197.506667 286.88,197.173333 286,196.88 C285.12,196.586667 284.393333,196.186667 283.82,195.68 C283.246667,195.173333 282.96,194.52 282.96,193.72 C282.96,192.573333 283.46,191.653333 284.46,190.96 C285.46,190.266667 286.986667,189.92 289.04,189.92 C290.293333,189.92 291.586667,190.106667 292.92,190.48 C294.253333,190.853333 295.533333,191.4 296.76,192.12 L296.76,192.12 L298.4,188.08 C297.2,187.28 295.773333,186.666667 294.12,186.24 C292.466667,185.813333 290.786667,185.6 289.08,185.6 C286.626667,185.6 284.553333,185.973333 282.86,186.72 C281.166667,187.466667 279.9,188.473333 279.06,189.74 C278.22,191.006667 277.8,192.413333 277.8,193.96 C277.8,195.8 278.273333,197.26 279.22,198.34 C280.166667,199.42 281.3,200.213333 282.62,200.72 C283.94,201.226667 285.666667,201.733333 287.8,202.24 C289.32,202.613333 290.52,202.946667 291.4,203.24 C292.28,203.533333 293.006667,203.94 293.58,204.46 C294.153333,204.98 294.44,205.64 294.44,206.44 C294.44,207.533333 293.926667,208.413333 292.9,209.08 C291.873333,209.746667 290.32,210.08 288.24,210.08 C286.56,210.08 284.886667,209.793333 283.22,209.22 C281.553333,208.646667 280.146667,207.906667 279,207 L279,207 L277.2,211.04 C278.373333,212.053333 279.966667,212.866667 281.98,213.48 C283.993333,214.093333 286.08,214.4 288.24,214.4 Z M321.18,214.4 C323.473333,214.4 325.573333,214 327.48,213.2 C329.386667,212.4 330.993333,211.24 332.3,209.72 L332.3,209.72 L328.94,206.52 C326.913333,208.733333 324.42,209.84 321.46,209.84 C319.54,209.84 317.82,209.42 316.3,208.58 C314.78,207.74 313.593333,206.573333 312.74,205.08 C311.886667,203.586667 311.46,201.893333 311.46,200 C311.46,198.106667 311.886667,196.413333 312.74,194.92 C313.593333,193.426667 314.78,192.26 316.3,191.42 C317.82,190.58 319.54,190.16 321.46,190.16 C324.42,190.16 326.913333,191.253333 328.94,193.44 L328.94,193.44 L332.3,190.28 C330.993333,188.76 329.393333,187.6 327.5,186.8 C325.606667,186 323.513333,185.6 321.22,185.6 C318.393333,185.6 315.84,186.22 313.56,187.46 C311.28,188.7 309.486667,190.413333 308.18,192.6 C306.873333,194.786667 306.22,197.253333 306.22,200 C306.22,202.746667 306.866667,205.213333 308.16,207.4 C309.453333,209.586667 311.24,211.3 313.52,212.54 C315.8,213.78 318.353333,214.4 321.18,214.4 Z M353.28,214.4 C356.133333,214.4 358.706667,213.78 361,212.54 C363.293333,211.3 365.093333,209.586667 366.4,207.4 C367.706667,205.213333 368.36,202.746667 368.36,200 C368.36,197.253333 367.706667,194.786667 366.4,192.6 C365.093333,190.413333 363.293333,188.7 361,187.46 C358.706667,186.22 356.133333,185.6 353.28,185.6 C350.426667,185.6 347.853333,186.22 345.56,187.46 C343.266667,188.7 341.466667,190.42 340.16,192.62 C338.853333,194.82 338.2,197.28 338.2,200 C338.2,202.72 338.853333,205.18 340.16,207.38 C341.466667,209.58 343.266667,211.3 345.56,212.54 C347.853333,213.78 350.426667,214.4 353.28,214.4 Z M353.28,209.84 C351.413333,209.84 349.733333,209.42 348.24,208.58 C346.746667,207.74 345.573333,206.566667 344.72,205.06 C343.866667,203.553333 343.44,201.866667 343.44,200 C343.44,198.133333 343.866667,196.446667 344.72,194.94 C345.573333,193.433333 346.746667,192.26 348.24,191.42 C349.733333,190.58 351.413333,190.16 353.28,190.16 C355.146667,190.16 356.826667,190.58 358.32,191.42 C359.813333,192.26 360.986667,193.433333 361.84,194.94 C362.693333,196.446667 363.12,198.133333 363.12,200 C363.12,201.866667 362.693333,203.553333 361.84,205.06 C360.986667,206.566667 359.813333,207.74 358.32,208.58 C356.826667,209.42 355.146667,209.84 353.28,209.84 Z M389.9,214 L402.1,186 L396.9,186 L387.5,207.6 L378.18,186 L372.54,186 L384.78,214 L389.9,214 Z M429.56,214 L429.56,209.64 L413.76,209.64 L413.76,201.92 L427.28,201.92 L427.28,197.64 L413.76,197.64 L413.76,190.36 L429,190.36 L429,186 L408.56,186 L408.56,214 L429.56,214 Z M444.06,214 L444.06,205.84 L450.578367,205.839184 C450.960408,205.835918 451.254286,205.822857 451.46,205.8 L451.46,205.8 L457.18,214 L462.78,214 L456.34,204.8 C458.26,204.053333 459.733333,202.92 460.76,201.4 C461.786667,199.88 462.3,198.066667 462.3,195.96 C462.3,193.906667 461.82,192.133333 460.86,190.64 C459.9,189.146667 458.52,188 456.72,187.2 C454.92,186.4 452.806667,186 450.38,186 L450.38,186 L438.86,186 L438.86,214 L444.06,214 Z M450.14,201.56 L444.06,201.56 L444.06,190.4 L450.14,190.4 C452.406667,190.4 454.126667,190.88 455.3,191.84 C456.473333,192.8 457.06,194.173333 457.06,195.96 C457.06,197.746667 456.473333,199.126667 455.3,200.1 C454.126667,201.073333 452.406667,201.56 450.14,201.56 L450.14,201.56 Z M498.22,214 L498.22,204.12 L509.18,186 L504.06,186 L495.78,199.64 L487.58,186 L482.02,186 L493.02,204.2 L493.02,214 L498.22,214 Z M527.96,214.4 C530.813333,214.4 533.386667,213.78 535.68,212.54 C537.973333,211.3 539.773333,209.586667 541.08,207.4 C542.386667,205.213333 543.04,202.746667 543.04,200 C543.04,197.253333 542.386667,194.786667 541.08,192.6 C539.773333,190.413333 537.973333,188.7 535.68,187.46 C533.386667,186.22 530.813333,185.6 527.96,185.6 C525.106667,185.6 522.533333,186.22 520.24,187.46 C517.946667,188.7 516.146667,190.42 514.84,192.62 C513.533333,194.82 512.88,197.28 512.88,200 C512.88,202.72 513.533333,205.18 514.84,207.38 C516.146667,209.58 517.946667,211.3 520.24,212.54 C522.533333,213.78 525.106667,214.4 527.96,214.4 Z M527.96,209.84 C526.093333,209.84 524.413333,209.42 522.92,208.58 C521.426667,207.74 520.253333,206.566667 519.4,205.06 C518.546667,203.553333 518.12,201.866667 518.12,200 C518.12,198.133333 518.546667,196.446667 519.4,194.94 C520.253333,193.433333 521.426667,192.26 522.92,191.42 C524.413333,190.58 526.093333,190.16 527.96,190.16 C529.826667,190.16 531.506667,190.58 533,191.42 C534.493333,192.26 535.666667,193.433333 536.52,194.94 C537.373333,196.446667 537.8,198.133333 537.8,200 C537.8,201.866667 537.373333,203.553333 536.52,205.06 C535.666667,206.566667 534.493333,207.74 533,208.58 C531.506667,209.42 529.826667,209.84 527.96,209.84 Z M564.1,214.4 C567.966667,214.4 570.973333,213.313333 573.12,211.14 C575.266667,208.966667 576.34,205.853333 576.34,201.8 L576.34,201.8 L576.34,186 L571.22,186 L571.22,201.6 C571.22,207.093333 568.86,209.84 564.14,209.84 C559.393333,209.84 557.02,207.093333 557.02,201.6 L557.02,201.6 L557.02,186 L551.82,186 L551.82,201.8 C551.82,205.853333 552.9,208.966667 555.06,211.14 C557.22,213.313333 560.233333,214.4 564.1,214.4 Z M592.32,214 L592.32,205.84 L598.838367,205.839184 C599.220408,205.835918 599.514286,205.822857 599.72,205.8 L599.72,205.8 L605.44,214 L611.04,214 L604.6,204.8 C606.52,204.053333 607.993333,202.92 609.02,201.4 C610.046667,199.88 610.56,198.066667 610.56,195.96 C610.56,193.906667 610.08,192.133333 609.12,190.64 C608.16,189.146667 606.78,188 604.98,187.2 C603.18,186.4 601.066667,186 598.64,186 L598.64,186 L587.12,186 L587.12,214 L592.32,214 Z M598.4,201.56 L592.32,201.56 L592.32,190.4 L598.4,190.4 C600.666667,190.4 602.386667,190.88 603.56,191.84 C604.733333,192.8 605.32,194.173333 605.32,195.96 C605.32,197.746667 604.733333,199.126667 603.56,200.1 C602.386667,201.073333 600.666667,201.56 598.4,201.56 L598.4,201.56 Z M639.6,214 L639.6,205.92 L645.92,205.92 C648.346667,205.92 650.46,205.52 652.26,204.72 C654.06,203.92 655.44,202.766667 656.4,201.26 C657.36,199.753333 657.84,197.986667 657.84,195.96 C657.84,193.906667 657.36,192.133333 656.4,190.64 C655.44,189.146667 654.06,188 652.26,187.2 C650.46,186.4 648.346667,186 645.92,186 L645.92,186 L634.4,186 L634.4,214 L639.6,214 Z M645.68,201.52 L639.6,201.52 L639.6,190.4 L645.68,190.4 C647.946667,190.4 649.666667,190.88 650.84,191.84 C652.013333,192.8 652.6,194.173333 652.6,195.96 C652.6,197.746667 652.013333,199.12 650.84,200.08 C649.666667,201.04 647.946667,201.52 645.68,201.52 L645.68,201.52 Z M666.54,214 L669.3,207.52 L683.3,207.52 L686.1,214 L691.54,214 L678.9,186 L673.78,186 L661.18,214 L666.54,214 Z M681.58,203.44 L671.06,203.44 L676.3,191.2 L681.58,203.44 Z M708.08,214 L708.08,190.4 L717.36,190.4 L717.36,186 L693.6,186 L693.6,190.4 L702.88,190.4 L702.88,214 L708.08,214 Z M729.98,214 L729.98,202 L744.46,202 L744.46,214 L749.66,214 L749.66,186 L744.46,186 L744.46,197.56 L729.98,197.56 L729.98,186 L724.78,186 L724.78,214 L729.98,214 Z" id="DISCOVERYOURPATH" fill="#0F4C81" fill-rule="nonzero"></path></g></svg>';
  
  generatePdf() {

    const docDef = this.buildAssesmentProfile(InterestsData, InterestsGraphData, PerformanceData, AptitudeData, RecData1, RecData2);
    pdfMake.createPdf(docDef).open();

  }


  // main function, builds entire pdf

  buildAssesmentProfile(interests: any[], interestsGraph: any[], resultNums: any[], aptitudeResults: any[], leadingJobs: any[], leadingJobs2: any[]): any {
    const documentDefinition = {
      pageMargins: [40, 80, 40, 80],
      header: function (currentPage, pageCount) {
        return [
          {
            columns: [
              {
                text: "Jackson.McIntyre",
                width: 148.75,
                fontSize: 12
              },
              {
                stack: [
                  {
                    text: "CareerScope® Assessment Profile",
                    fontSize: 16
                  }, {
                    text: "Jackson McIntyre",
                    fontSize: 12
                  }
                ],
                width: 298
              },
              {
                stack: [
                  {
                    text: currentPage.toString() + ' of ' + pageCount,
                    fontSize: 12
                  },
                  {
                    text: "05/13/2020",
                    fontSize: 12
                  }
                ],
                width: 148.75
              }
            ],
            margin: [0, 30],
            alignment: 'center'
          }
        ]
      },

      footer: this.buildFooter(),
      content: [
        this.buildCover(),
        { text: 'INTEREST INVENTORY', style: 'header', alignment: 'center' },
        { text: 'Occupations have been divided into twelve large groups, called Interest Areas, based upon the kind of activities workers perform. The CareerScope Interest Inventory includes a list of work activities from the twelve Interest Areas. This report examines your responses to the interest inventory items to help you choose the kind of work you will most enjoy.', margin: [0, 10] },
        this.buildInterestAreas(interests),
        this.buildIndividualProfileAnalysis(interestsGraph),
        { text: 'APTITUDE ASSESMENT', style: 'header', alignment: 'center', pageBreak: 'before' },
        this.buildPerformanceOnTasks(resultNums),
        this.buildAptitudeProfile(aptitudeResults),
        { text: 'RECOMMENDATIONS', style: 'header', alignment: 'center', pageBreak: 'before' },
        this.buildRecommendations(leadingJobs, leadingJobs2),
        {
          svg: this.careerScopeLogoSVG,
          width: 500
        },
      ],
      styles: {
        coverTitle: {
          fontSize: 20,
          alignment: 'center'
        },
        coverText: {
          fontSize: 15,
          alignment: 'center'
        },
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
          decoration: 'underline'
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
          decoration: 'underline'
        },
        subtext: {
          fontSize: 9
        },
        tableExample: {
          margin: [0, 5, 0, 15],
          alignment: 'center'
        },
        tableHeader: {
          bold: true,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
    };
    return documentDefinition;
  }


  buildCover(): any {
    var content = [];
    content.push({ text: 'CareerScope®', margin: [0, 175, 0, 0], style: 'coverTitle' });
    content.push({ text: 'Assessment Profile', margin: [0, 75], style: 'coverTitle' });
    content.push({ text: 'Date of Report: 5/13/20', margin: [0, 0, 0, 30], style: 'coverText' });
    content.push({ text: 'Jackson McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Jackson.McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Interest Administration: 5/13/20', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Aptitude Administration: 5/13/20', margin: [0, 0, 0, 20], style: 'coverText' });
    content.push({ text: 'Copyright © 2020 Vocational Research Institute', alignment: 'center', fontSize: 10, pageBreak: 'after' });

    return content;
  }

  buildInterestAreas(interests: any[]): any {
    var content = [];
    content.push({ text: 'I. Interest Area Scores', style: 'subheader', margin: [0, 5] });
    content.push({ text: 'Your total number of “LIKE,” “?” and “DISLIKE” responses for each Interest Area are reported below. Percentile scores show the percentage of other people who gave fewer “LIKE” responses than you did in each Interest Area. A percentile score of 50 shows average interest; 70 or higher shows above average interest as compared to other people. Percentile scores are listed below for males and females as well as for the total group. Your percentile scores are based upon a comparison between your results and the results of people who are 18 years of age or older.', margin: [0, 10] });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          style: 'tableExample',
          table: {
            body:
              interests
          },
          //layout: 'lightHorizontalLines'
          layout: {
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 2 : 1;
            },
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 1;
            },
            hLineColor: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
            },
            vLineColor: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
            }
          },
        },
        { width: '*', text: '' }
      ]
    });

    content.push({ text: 'Your most significant Interest Areas are identified in the “IPA” column and are based upon data found in the “Percent Like” column. Please refer to the Individual Profile Analysis on the next page for more detailed information.', pageBreak: 'after' });

    return content;
  }

  buildIndividualProfileAnalysis(interestsGraph: any[]): any {
    var content = [];
    content.push({ text: 'II. Interest Profile Analysis', style: 'subheader', margin: [0, 5] });
    content.push({ text: 'The table below reports and displays the percentage of “LIKE” responses that you recorded within each of the twelve Interest Areas. The dark vertical line in the chart is your average percentage of “LIKE” responses (31%) across all twelve Interest Areas', margin: [0, 10] });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          style: 'tableExample',
          table: {
            body:
              interestsGraph
          },
          //layout: 'lightHorizontalLines'
        },
        { width: '*', text: '' },
      ]
    });
    content.push('The CareerScope system has analyzed your profile. The following Interest Areas stand out significantly above your average level of interest:');
    content.push(
      { text: '\n1. Physical Performing (12)' },
      { text: '2. Protective (4)' },
      { text: '3. Leading/Influencing (11)' },
      { text: '3. Artistic (1)' }
    );

    return content;
  }

  buildPerformanceOnTasks(resultNums: any[]): any {
    var content = [];
    content.push({ text: 'I. Performance on tasks', style: 'subheader' });
    content.push('The table below reports the number of correct answers and the number of questions you attempted in each assessment task.');
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          style: 'tableExample',
          table: {
            body:
              resultNums
          },
          layout: 'lightHorizontalLines'
        },
        { width: '*', text: '' },
      ]
    });
    return content;
  }

  buildAptitudeProfile(aptitudeResults: any[]): any {
    var content = [];
    content.push({ text: 'II. Aptitude Profile', style: 'subheader' });
    content.push('The table below reports and graphically displays your aptitudes as standard scores and as percentile scores. Both types of scores involve the comparison of your performance against the performance of other adults.');
    content.push('\nAn aptitude score of 100 is exactly average. Scores between 80 and 120 can be thought of as “in the average range.” Percentile (%tile) scores report the percentage of people who score below you. The graph displays your relative strengths. Different combinations of aptitudes (listed on the left) are important in different Work Groups.');
    content.push({
      style: 'tableExample',
      table: {
        widths: ['auto', 'auto', 'auto', 200],
        body:
          aptitudeResults
      },
      //layout: 'lightHorizontalLines'
    });
    content.push({ text: '--- Score can not be calculated', style: 'subtext' });
    content.push({ text: '•Your aptitude profile may include Motor Coordination, Finger Dexterity and Manual Dexterity scores. The sources of these scores are listed below. If “Counselor” is listed as the source of information, an assumption has been made regarding the score. If “None” is listed as the source, the performance factor will not be considered when making Work Group recommendations. Motor Coordination: Counselor; Finger Dexterity: Counselor; Manual Dexterity: Counselor', style: 'subtext' });


    return content;
  }

  buildRecommendations(leadingJobs: any[], leadingJobs2: any[]): any {
    var content = [];
    content.push('Occupations have been divided into twelve Interest Areas as described in the Guide for Occupational Exploration (GOE) and elsewhere. The Guide for Occupational Exploration further subdivides the Interest Areas into Work Groups, based upon aptitude score requirements. Occupations that belong to the same Work Group require similar interests and similar aptitudes.');
    content.push('\nReported below are career directions that match your aptitudes as well as your 3 strongest interest areas. When you see a • symbol next to a GOE Work Group number and name it means you can be more confident that your aptitude scores qualify you for that Work Group. Review your CareerScope recommendations and score results with a career guidance and counseling professional to learn about the Work Groups that best match your assessment results.');
    content.push({ text: 'INTEREST AREA 11 - LEADING/INFLUENCING', style: 'subheader' });
    content.push({ text: 'An interest in leading and influencing others by using high-level verbal or numerical abilities' });

    //list
    content.push({
      ul: [
        [{ text: 'GOE 11.01 Mathematics & Statistics', decoration: 'underline', margin: [0, 10] },
        { text: 'Workers in this group use advanced math and statistics to solve problems and conduct research. They analyze and interpret numerical data for planning and decision making. Some of these workers may first study and then determine how computers may best be used to solve problems or process information.' },
        {
          columns: [
            { width: '*', text: '' },
            {
              width: 'auto',
              style: 'tableExample',
              table: {
                body:
                  leadingJobs
              },
              layout: 'lightHorizontalLines'
            },
            { width: '*', text: '' },
          ]
        }
        ],
        [{ text: 'GOE 11.02 Educational & Library Svcs', decoration: 'underline', margin: [0, 10] },
        { text: 'Workers in this group do general and specialized teaching, vocational training, advising in agriculture and home economics, and library work of various kinds.' },
        {
          columns: [
            { width: '*', text: '' },
            {
              width: 'auto',
              style: 'tableExample',
              table: {
                body:
                  leadingJobs2
              },
              layout: 'lightHorizontalLines'
            },
            { width: '*', text: '' },
          ]
        }
        ]
      ]
    })
    return content;
  }

  buildFooter() {
    var content = [];

    content.push({
      columns: [
        {
          width: 'auto',
          svg: this.careerScopeLogoSVG,
          fit: [100, 100],
          margin: [20, 40, 0, 0]
        }, {
          text: 'Standard:N  Audio:N  Untimed:N  Language:E  Intro:Y', alignment: 'right', margin: [15, 50]
        }
      ]
    })

    return content;
  }
}