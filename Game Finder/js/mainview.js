// SVG Indexing from 1 to 8
let pcSvg = `<svg id="pc" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.95833H5.95833V0.998704L13 0V5.95833ZM5.41667 1.08333V5.95833H0V1.80612L5.41667 1.08333ZM5.41667 6.5H0V11.1145L5.41667 11.9167V6.5ZM5.95833 11.912V6.5H13V13L5.95833 11.912Z" fill="white"/> </svg>`;
let playstationSvg = `<svg id="ps" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M6.5 0.149439L6.5 12.0297L9.07955 12.882L9.07955 2.9205C9.07955 2.4511 9.28024 2.13944 9.60212 2.24662C10.023 2.36835 10.1048 2.80075 10.1048 3.26493L10.1048 7.24338C11.7104 8.05381 12.9745 7.24296 12.9745 5.10468C12.9745 2.91966 12.2334 1.94626 10.0527 1.16365C9.19249 0.864976 7.59836 0.360979 6.5 0.149439Z" fill="white"/> <path d="M9.75 11.1429L13.6492 9.45771C14.0903 9.25915 14.1578 8.9894 13.8008 8.84764C13.4382 8.70325 12.791 8.74457 12.3452 8.93895L9.75 10.0506V8.27688L9.89861 8.21729C9.89861 8.21729 10.6498 7.89415 11.7064 7.75502C12.7609 7.61465 14.0541 7.77328 15.0706 8.2385C16.2156 8.68019 16.3439 9.32446 16.0542 9.77281C15.7603 10.2165 15.0478 10.5375 15.0478 10.5375L9.75 12.8484" fill="white"/> <path d="M1.18907 11.3388C-0.0278308 10.9682 -0.230758 10.185 0.324385 9.7326C0.836458 9.31949 1.70854 9.0085 1.70854 9.0085L5.31353 7.6032L5.31353 9.20264L2.72172 10.2184C2.26263 10.3979 2.1938 10.6505 2.56358 10.7827C2.93997 10.9202 3.60794 10.8832 4.0673 10.6979L5.31353 10.2067V11.6345C5.23321 11.6492 5.1439 11.6641 5.06238 11.6793C3.81985 11.9048 2.49607 11.8122 1.18907 11.3388Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1271 12.7978C16.0247 12.8989 15.8903 12.9561 15.7455 12.9561C15.6008 12.9561 15.462 12.8989 15.3594 12.7978C15.2582 12.6948 15.2021 12.5603 15.2021 12.4154C15.2021 12.1153 15.4451 11.8727 15.7455 11.8727C15.8903 11.8727 16.0247 11.928 16.1271 12.0314C16.2284 12.1324 16.2855 12.2692 16.2855 12.4154C16.2855 12.5603 16.2284 12.6948 16.1271 12.7978ZM15.2934 12.4154C15.2934 12.292 15.3396 12.1788 15.4239 12.095C15.5104 12.0092 15.6257 11.963 15.7455 11.963C15.8655 11.963 15.9779 12.0092 16.0622 12.095C16.1473 12.1788 16.1932 12.292 16.1932 12.4154C16.1932 12.6627 15.9922 12.8634 15.7455 12.8634C15.6257 12.8634 15.5104 12.8177 15.4239 12.7331C15.3396 12.6477 15.2934 12.5358 15.2934 12.4154ZM15.9927 12.6405C15.9976 12.6544 16.0034 12.6627 16.0118 12.6651L16.0193 12.6694V12.7038H15.9018L15.8996 12.6969L15.8916 12.6761C15.8903 12.6651 15.8887 12.6508 15.8871 12.6267L15.8819 12.5325C15.8805 12.4991 15.8696 12.4796 15.8494 12.4667C15.8345 12.4617 15.8141 12.4579 15.7837 12.4579H15.6205V12.7038H15.5134V12.0997H15.7941C15.8399 12.0997 15.8785 12.1078 15.908 12.1204C15.9672 12.1482 15.9976 12.1984 15.9976 12.269C15.9976 12.3037 15.9889 12.3362 15.9741 12.3601C15.9612 12.377 15.946 12.3924 15.9295 12.4075L15.9339 12.4106C15.9451 12.4185 15.9563 12.4263 15.9628 12.4378C15.9778 12.4543 15.9846 12.482 15.9858 12.5177L15.9885 12.5946C15.9889 12.6143 15.9905 12.6296 15.9927 12.6405ZM15.8661 12.3435C15.8835 12.3323 15.8916 12.31 15.8916 12.276C15.8916 12.2401 15.8792 12.2162 15.8549 12.2042C15.8399 12.1984 15.8214 12.1942 15.7964 12.1942H15.6205V12.3639H15.7867C15.8198 12.3639 15.846 12.3571 15.8661 12.3435Z" fill="white"/> </svg>`;
let xboxSvg = `<svg id="xbox" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 0C7.75357 0 8.79048 0.40056 9.73452 1.07423C9.75 1.07423 9.75 1.09244 9.75 1.11064C9.75 1.12885 9.73452 1.12885 9.71905 1.12885C8.5119 0.819328 6.68571 2.03922 6.51548 2.16667H6.5H6.48452C6.31429 2.03922 4.4881 0.819328 3.28095 1.12885C3.26548 1.12885 3.25 1.12885 3.25 1.11064C3.25 1.09244 3.25 1.07423 3.26548 1.07423C4.20952 0.40056 5.24643 0 6.5 0ZM10.6537 11.4392C11.6287 10.4302 8.40504 6.86712 6.5023 5.41667C6.5023 5.41667 6.48658 5.41667 6.48658 5.43243C4.59957 6.86712 1.3602 10.4302 2.35088 11.4392C3.45164 12.4167 4.91407 13 6.5023 13C8.09054 13 9.53724 12.4167 10.6537 11.4392ZM1.78082 2.19751C1.7734 2.19751 1.76969 2.20158 1.76598 2.20566C1.76227 2.20973 1.75856 2.2138 1.75114 2.2138C0.667808 3.40327 0 5.04896 0 6.8576C0 8.34035 0.460046 9.72534 1.21689 10.817C1.21689 10.8333 1.23174 10.8333 1.24658 10.8333C1.26142 10.8333 1.26142 10.817 1.24658 10.8007C0.78653 9.25282 3.11644 5.52149 4.31849 3.95726L4.33333 3.94097C4.33333 3.93257 4.33333 3.9285 4.3313 3.92653C4.32939 3.92467 4.32568 3.92467 4.31849 3.92467C2.49315 1.93681 1.8847 2.14863 1.78082 2.19751ZM8.66667 3.93424L8.68151 3.91793C10.5068 1.94443 11.1153 2.15646 11.2043 2.18908C11.2105 2.18908 11.2141 2.18908 11.2173 2.19025C11.2217 2.1919 11.2253 2.19586 11.234 2.20539C12.3322 3.39602 13 5.04332 13 6.85372C13 8.33792 12.54 9.72426 11.7831 10.817C11.7831 10.8333 11.7683 10.8333 11.7534 10.8333V10.8007C12.1986 9.25127 9.88356 5.5163 8.68151 3.95055C8.66667 3.95055 8.66667 3.93424 8.66667 3.93424Z" fill="white"/> </svg>`;
let iosSvg = `<svg id="ios" viewBox="0 0 900 1000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.998 304.998"><path d="M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z"/></svg>`;
let macSvg = `<svg id="mac" viewBox="0 0 900 1000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.998 304.998"><path d="M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z"/></svg>`;
let linuxSvg = `<svg id="linux" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.998 304.998" > <path id="linux" d="M274.659,244.888c-8.944-3.663-12.77-8.524-12.4-15.777c0.381-8.466-4.422-14.667-6.703-17.117 c1.378-5.264,5.405-23.474,0.004-39.291c-5.804-16.93-23.524-42.787-41.808-68.204c-7.485-10.438-7.839-21.784-8.248-34.922 c-0.392-12.531-0.834-26.735-7.822-42.525C190.084,9.859,174.838,0,155.851,0c-11.295,0-22.889,3.53-31.811,9.684 c-18.27,12.609-15.855,40.1-14.257,58.291c0.219,2.491,0.425,4.844,0.545,6.853c1.064,17.816,0.096,27.206-1.17,30.06 c-0.819,1.865-4.851,7.173-9.118,12.793c-4.413,5.812-9.416,12.4-13.517,18.539c-4.893,7.387-8.843,18.678-12.663,29.597 c-2.795,7.99-5.435,15.537-8.005,20.047c-4.871,8.676-3.659,16.766-2.647,20.505c-1.844,1.281-4.508,3.803-6.757,8.557 c-2.718,5.8-8.233,8.917-19.701,11.122c-5.27,1.078-8.904,3.294-10.804,6.586c-2.765,4.791-1.259,10.811,0.115,14.925 c2.03,6.048,0.765,9.876-1.535,16.826c-0.53,1.604-1.131,3.42-1.74,5.423c-0.959,3.161-0.613,6.035,1.026,8.542 c4.331,6.621,16.969,8.956,29.979,10.492c7.768,0.922,16.27,4.029,24.493,7.035c8.057,2.944,16.388,5.989,23.961,6.913 c1.151,0.145,2.291,0.218,3.39,0.218c11.434,0,16.6-7.587,18.238-10.704c4.107-0.838,18.272-3.522,32.871-3.882 c14.576-0.416,28.679,2.462,32.674,3.357c1.256,2.404,4.567,7.895,9.845,10.724c2.901,1.586,6.938,2.495,11.073,2.495 c0.001,0,0,0,0.001,0c4.416,0,12.817-1.044,19.466-8.039c6.632-7.028,23.202-16,35.302-22.551c2.7-1.462,5.226-2.83,7.441-4.065 c6.797-3.768,10.506-9.152,10.175-14.771C282.445,250.905,279.356,246.811,274.659,244.888z M124.189,243.535 c-0.846-5.96-8.513-11.871-17.392-18.715c-7.26-5.597-15.489-11.94-17.756-17.312c-4.685-11.082-0.992-30.568,5.447-40.602 c3.182-5.024,5.781-12.643,8.295-20.011c2.714-7.956,5.521-16.182,8.66-19.783c4.971-5.622,9.565-16.561,10.379-25.182 c4.655,4.444,11.876,10.083,18.547,10.083c1.027,0,2.024-0.134,2.977-0.403c4.564-1.318,11.277-5.197,17.769-8.947 c5.597-3.234,12.499-7.222,15.096-7.585c4.453,6.394,30.328,63.655,32.972,82.044c2.092,14.55-0.118,26.578-1.229,31.289 c-0.894-0.122-1.96-0.221-3.08-0.221c-7.207,0-9.115,3.934-9.612,6.283c-1.278,6.103-1.413,25.618-1.427,30.003 c-2.606,3.311-15.785,18.903-34.706,21.706c-7.707,1.12-14.904,1.688-21.39,1.688c-5.544,0-9.082-0.428-10.551-0.651l-9.508-10.879 C121.429,254.489,125.177,250.583,124.189,243.535z M136.254,64.149c-0.297,0.128-0.589,0.265-0.876,0.411 c-0.029-0.644-0.096-1.297-0.199-1.952c-1.038-5.975-5-10.312-9.419-10.312c-0.327,0-0.656,0.025-1.017,0.08 c-2.629,0.438-4.691,2.413-5.821,5.213c0.991-6.144,4.472-10.693,8.602-10.693c4.85,0,8.947,6.536,8.947,14.272 C136.471,62.143,136.4,63.113,136.254,64.149z M173.94,68.756c0.444-1.414,0.684-2.944,0.684-4.532 c0-7.014-4.45-12.509-10.131-12.509c-5.552,0-10.069,5.611-10.069,12.509c0,0.47,0.023,0.941,0.067,1.411 c-0.294-0.113-0.581-0.223-0.861-0.329c-0.639-1.935-0.962-3.954-0.962-6.015c0-8.387,5.36-15.211,11.95-15.211 c6.589,0,11.95,6.824,11.95,15.211C176.568,62.78,175.605,66.11,173.94,68.756z M169.081,85.08 c-0.095,0.424-0.297,0.612-2.531,1.774c-1.128,0.587-2.532,1.318-4.289,2.388l-1.174,0.711c-4.718,2.86-15.765,9.559-18.764,9.952 c-2.037,0.274-3.297-0.516-6.13-2.441c-0.639-0.435-1.319-0.897-2.044-1.362c-5.107-3.351-8.392-7.042-8.763-8.485 c1.665-1.287,5.792-4.508,7.905-6.415c4.289-3.988,8.605-6.668,10.741-6.668c0.113,0,0.215,0.008,0.321,0.028 c2.51,0.443,8.701,2.914,13.223,4.718c2.09,0.834,3.895,1.554,5.165,2.01C166.742,82.664,168.828,84.422,169.081,85.08z M205.028,271.45c2.257-10.181,4.857-24.031,4.436-32.196c-0.097-1.855-0.261-3.874-0.42-5.826 c-0.297-3.65-0.738-9.075-0.283-10.684c0.09-0.042,0.19-0.078,0.301-0.109c0.019,4.668,1.033,13.979,8.479,17.226 c2.219,0.968,4.755,1.458,7.537,1.458c7.459,0,15.735-3.659,19.125-7.049c1.996-1.996,3.675-4.438,4.851-6.372 c0.257,0.753,0.415,1.737,0.332,3.005c-0.443,6.885,2.903,16.019,9.271,19.385l0.927,0.487c2.268,1.19,8.292,4.353,8.389,5.853 c-0.001,0.001-0.051,0.177-0.387,0.489c-1.509,1.379-6.82,4.091-11.956,6.714c-9.111,4.652-19.438,9.925-24.076,14.803 c-6.53,6.872-13.916,11.488-18.376,11.488c-0.537,0-1.026-0.068-1.461-0.206C206.873,288.406,202.886,281.417,205.028,271.45z M39.917,245.477c-0.494-2.312-0.884-4.137-0.465-5.905c0.304-1.31,6.771-2.714,9.533-3.313c3.883-0.843,7.899-1.714,10.525-3.308 c3.551-2.151,5.474-6.118,7.17-9.618c1.228-2.531,2.496-5.148,4.005-6.007c0.085-0.05,0.215-0.108,0.463-0.108 c2.827,0,8.759,5.943,12.177,11.262c0.867,1.341,2.473,4.028,4.331,7.139c5.557,9.298,13.166,22.033,17.14,26.301 c3.581,3.837,9.378,11.214,7.952,17.541c-1.044,4.909-6.602,8.901-7.913,9.784c-0.476,0.108-1.065,0.163-1.758,0.163 c-7.606,0-22.662-6.328-30.751-9.728l-1.197-0.503c-4.517-1.894-11.891-3.087-19.022-4.241c-5.674-0.919-13.444-2.176-14.732-3.312 c-1.044-1.171,0.167-4.978,1.235-8.337c0.769-2.414,1.563-4.91,1.998-7.523C41.225,251.596,40.499,248.203,39.917,245.477z" /> </svg>`;
let nintendoSvg = `<svg id="nintendo" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67443 13H7.67506C7.62406 13 7.58325 12.9591 7.58325 12.908V0.081761C7.58325 0.0408805 7.61385 0 7.66486 0H9.67443C11.5106 0 12.9999 1.49214 12.9999 3.33176V9.66824C12.9999 11.5079 11.5106 13 9.67443 13ZM11.4596 7.15409C11.4596 6.42846 10.8679 5.83569 10.1437 5.83569C9.41941 5.83569 8.83796 6.42846 8.82776 7.15409C8.82776 7.87972 9.41941 8.47248 10.1437 8.47248C10.8679 8.47248 11.4596 7.87972 11.4596 7.15409Z" fill="white"/> <path d="M2.16675 4.33333C2.16675 4.92917 2.65425 5.41667 3.25008 5.41667C3.84591 5.41667 4.33341 4.92917 4.33341 4.33333C4.33341 3.7375 3.84591 3.25 3.25008 3.25C2.64522 3.25 2.16675 3.72847 2.16675 4.33333Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45677 0H6.40457C6.45759 0 6.5 0.0408805 6.5 0.0919811V12.908C6.5 12.9591 6.45759 13 6.40457 13H3.45677C1.54812 13 0 11.5079 0 9.66824V3.33176C0 1.49214 1.54812 0 3.45677 0ZM3.45677 11.9575H5.41843V1.04245H3.45677C2.82055 1.04245 2.22675 1.28774 1.7814 1.71698C1.32545 2.14623 1.08157 2.71855 1.08157 3.33176V9.66824C1.08157 10.2814 1.33605 10.8538 1.7814 11.283C2.22675 11.7225 2.82055 11.9575 3.45677 11.9575Z" fill="white"/> </svg>`;
let androidSvg = `<svg id="android" viewBox="0 0 45 50" xmlns="http://www.w3.org/2000/svg" ><path d="M 16.28125 0.03125 C 16.152344 0.0546875 16.019531 0.078125 15.90625 0.15625 C 15.449219 0.464844 15.347656 1.105469 15.65625 1.5625 L 17.8125 4.78125 C 14.480469 6.546875 11.996094 9.480469 11.1875 13 L 38.8125 13 C 38.003906 9.480469 35.519531 6.546875 32.1875 4.78125 L 34.34375 1.5625 C 34.652344 1.105469 34.550781 0.464844 34.09375 0.15625 C 33.632813 -0.152344 32.996094 -0.0195313 32.6875 0.4375 L 30.3125 3.9375 C 28.664063 3.335938 26.875 3 25 3 C 23.125 3 21.335938 3.335938 19.6875 3.9375 L 17.3125 0.4375 C 17.082031 0.09375 16.664063 -0.0429688 16.28125 0.03125 Z M 19.5 8 C 20.328125 8 21 8.671875 21 9.5 C 21 10.332031 20.328125 11 19.5 11 C 18.667969 11 18 10.332031 18 9.5 C 18 8.671875 18.667969 8 19.5 8 Z M 30.5 8 C 31.332031 8 32 8.671875 32 9.5 C 32 10.332031 31.332031 11 30.5 11 C 29.671875 11 29 10.332031 29 9.5 C 29 8.671875 29.671875 8 30.5 8 Z M 8 15 C 6.34375 15 5 16.34375 5 18 L 5 32 C 5 33.65625 6.34375 35 8 35 C 8.351563 35 8.6875 34.925781 9 34.8125 L 9 15.1875 C 8.6875 15.074219 8.351563 15 8 15 Z M 11 15 L 11 37 C 11 38.652344 12.347656 40 14 40 L 36 40 C 37.652344 40 39 38.652344 39 37 L 39 15 Z M 42 15 C 41.648438 15 41.3125 15.074219 41 15.1875 L 41 34.8125 C 41.3125 34.921875 41.648438 35 42 35 C 43.65625 35 45 33.65625 45 32 L 45 18 C 45 16.34375 43.65625 15 42 15 Z M 15 42 L 15 46 C 15 48.207031 16.792969 50 19 50 C 21.207031 50 23 48.207031 23 46 L 23 42 Z M 27 42 L 27 46 C 27 48.207031 28.792969 50 31 50 C 33.207031 50 35 48.207031 35 46 L 35 42 Z"/></svg>`;

//HTML refs
let cards = document.querySelectorAll(".main__card");
let cardsContainer = document.querySelector(".main__catalog");
let searchInput = document.querySelector(".header__search-box-input");
let header = document.querySelector(".header");
let mainCatalog = document.querySelector(".main__catalog");
let searchBox = document.querySelector(".header__search-box");
let leftSidebar = document.querySelector(".left-sidebar");

//Accessory function to reformat data given by API to match mockup
const dateReformat = function (dateComplete) {
  let completeDate = new Date(dateComplete);
  return completeDate
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .replace(/,/g, "");
};

//Accessory function, appends platform svg according to game platform ids
const platformSvgReplace = function (platformsArray) {
  let allPlatforms = "";
  platformsArray.map((platform) => {
    if (platform.platform.id === 1) {
      allPlatforms += pcSvg;
    }
    if (platform.platform.id === 2) {
      allPlatforms += playstationSvg;
    }
    if (platform.platform.id === 3) {
      allPlatforms += xboxSvg;
    }
    if (platform.platform.id === 4) {
      allPlatforms += iosSvg;
    }
    if (platform.platform.id === 5) {
      allPlatforms += macSvg;
    }
    if (platform.platform.id === 6) {
      allPlatforms += linuxSvg;
    }
    if (platform.platform.id === 7) {
      allPlatforms += nintendoSvg;
    }
    if (platform.platform.id === 8) {
      allPlatforms += androidSvg;
    }
  });
  return allPlatforms;
};

// Gets game description by requesting with game id
const getDescription = function (id) {
  axios
    .get(
      `https://api.rawg.io/api/games/${id}?key=11fed5206660488b9c693847e2864ee1`
    )
    .then((game) => {
      document.getElementById(`description ${id}`).innerHTML =
        game.data.description;
    });
};

// Gets game screenshots with game slug
const getScreenshots = function (slug) {
  let modalGalleryContainer = document.querySelector(".modal__right");
  modalGalleryContainer.innerHTML = `<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
  fetch(
    `https://api.rawg.io/api/games/${slug}/screenshots?key=a5ec9a0abd70401288b5e273d53daea9`
  )
    .then((response) => response.json())
    .then((game) => {
      modalGalleryContainer.innerHTML = `<div class="modal__img-container">
      <img class="img-medium" src=${game.results[0].image} />
      </div>
      <div class="modal__img-container">
        <img class="img-small" src=${game.results[1].image} />
      </div>
      <div class="modal__img-container">
        <img class="img-small" src=${game.results[2].image} />
      </div>
      <div class="modal__img-container">
        <img class="img-small" src=${game.results[3].image} />
      </div>
      <div class="modal__img-container -view-all">
        <img class="img-small" src=${game.results[4].image} />
        <div class="view-all-container">
          <p>View all</p>
          <svg
            viewBox="0 0 9 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.02823 1.875C0.460355 1.875 0 1.45527 0 0.9375C0 0.419733 0.460355 0 1.02823 0C1.59611 0 2.05647 0.419733 2.05647 0.9375C2.05647 1.45527 1.59611 1.875 1.02823 1.875ZM4.4557 1.87512C3.88783 1.87512 3.42747 1.45539 3.42747 0.937622C3.42747 0.419855 3.88783 0.00012207 4.4557 0.00012207C5.02358 0.00012207 5.48394 0.419855 5.48394 0.937622C5.48394 1.45539 5.02358 1.87512 4.4557 1.87512ZM6.85486 0.937622C6.85486 1.45539 7.31522 1.87512 7.8831 1.87512C8.45097 1.87512 8.91133 1.45539 8.91133 0.937622C8.91133 0.419855 8.45097 0.00012207 7.8831 0.00012207C7.31522 0.00012207 6.85486 0.419855 6.85486 0.937622Z"
              fill="white"
            />
          </svg>
          </div>`;
    });
};

// Get all main data from API
const fetchMain = function () {
  // Fetch alternative
  // fetch(
  //   "https://api.rawg.io/api/games?page_size=12&key=a5ec9a0abd70401288b5e273d53daea9"
  // )
  //   .then((response) => response.json())
  //   .then((games) => {
  //     games.results.map((game, index) => {
  axios
    .get(
      `https://api.rawg.io/api/games?page_size=12&key=a5ec9a0abd70401288b5e273d53daea9`
    )
    .then((games) => {
      cardsContainer.innerHTML = "";
      games.data.results.map((game, index) => {
        cardsContainer.insertAdjacentHTML(
          "beforeend",
          `<li class="main__card">
      <button onclick="openModal(${game.id})"class="main__card-inner-shadow">
        <figure class="main__card-image">
          <img alt="${game.name}"src="${game.background_image}"/>
        </figure>
        <div class="main__card-content">
          <div class="main__card-content-body">
            <div class="main__card-content-info">
              <h2>${game.name}</h2>
              <div class="main__card-content-info-text-container">
                <div class="main__card-content-info-text">
                  <p>Release date</p>
                  <p>${dateReformat(game.released)}</p>
                </div>
                <div class="main__card-content-info-text">
                  <p>Genres</p>
                  <p>${game.genres.map((genre) => {
                    return " " + genre.name;
                  })}</p>
                </div>
              </div>
              <p class="main__card-game-description" id="description ${
                game.id
              }"></p>
            </div>
            <div class="main__card-content-misc">
              <div class="main__card-content-misc-platforms">
              ${platformSvgReplace(game.parent_platforms)}
              </div>
              <p>#${index + 1}</p>
              <div class="gift">
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.7832 4.41406H0.515625V3.13086H2.7832V0.845703H4.06641V3.13086H6.33398V4.41406H4.06641V6.66992H2.7832V4.41406Z"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 2.5C3 1.11929 4.11929 0 5.5 0C6.88071 0 8 1.11929 8 2.5C8 1.11929 9.11929 0 10.5 0C11.8807 0 13 1.11929 13 2.5V2.506C13 2.576 13 2.776 12.962 3H15C15.5523 3 16 3.44772 16 4V5C16 5.55228 15.5523 6 15 6H1C0.447715 6 0 5.55228 0 5V4C0 3.44772 0.447715 3 1 3H3.038C3.01159 2.83668 2.99888 2.67144 3 2.506V2.5ZM4.068 3H7V2.5C7 1.9641 6.7141 1.46891 6.25 1.20096C5.7859 0.933013 5.2141 0.933013 4.75 1.20096C4.2859 1.46891 4 1.9641 4 2.5C4 2.585 4.002 2.774 4.045 2.93C4.05101 2.95385 4.05869 2.97724 4.068 3ZM11.932 3H9V2.5C9 1.67157 9.67157 1 10.5 1C11.3284 1 12 1.67157 12 2.5C12 2.585 11.998 2.774 11.955 2.93C11.9489 2.95381 11.9412 2.9772 11.932 3ZM15 7V14.5C15 15.3284 14.3284 16 13.5 16H9V7H15ZM1 14.5C1 15.3284 1.67157 16 2.5 16H7V7H1V14.5Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </button>
    </li>`
        );
        getDescription(game.id);
      });
    });
};

// Main card loading from API at initialization
fetchMain();

// Switch from horizontal to grid view and viceversa
const horizontalView = function () {
  mainCatalog.classList.add("--horizontal");
  cards.forEach((element) => {
    element.classList.add("--horizontal");
  });
};

const gridView = function () {
  mainCatalog.classList.remove("--horizontal");
  cards.forEach((element) => {
    element.classList.remove("--horizontal");
  });
};

// Search suggestions display classes
searchInput.addEventListener("click", function () {
  searchBox.classList.add("--display-suggestions");
});
searchInput.addEventListener("focus", function () {
  searchBox.classList.add("--display-suggestions");
});
searchInput.addEventListener("blur", function () {
  searchBox.classList.remove("--display-suggestions");
});

// Modal functions
const openModal = function (id) {
  let modalContainer = document.querySelector(".modal");
  //Add loader when opening modal
  modalContainer.innerHTML = `<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
  document.querySelector(".modal-bg").classList.remove("hidden");
  fetch(
    `https://api.rawg.io/api/games/${id}?key=11fed5206660488b9c693847e2864ee1`
  )
    .then((response) => response.json())
    .then((game) => {
      modalContainer.innerHTML = "";
      modalContainer.insertAdjacentHTML(
        "beforeend",
        `<img class="modal__background" src=${game.background_image} />
    <div class="modal__content">
      <div class="modal__top-platforms">
      ${platformSvgReplace(game.parent_platforms)}
      </div>
      <h1>${game.name}</h1>
      <button class="modal__close" onclick="closeModal()">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM5.354 4.646C5.26011 4.55211 5.13278 4.49937 5 4.49937C4.86722 4.49937 4.73989 4.55211 4.646 4.646C4.55211 4.73989 4.49937 4.86722 4.49937 5C4.49937 5.13278 4.55211 5.26011 4.646 5.354L7.293 8L4.646 10.646C4.59951 10.6925 4.56264 10.7477 4.53748 10.8084C4.51232 10.8692 4.49937 10.9343 4.49937 11C4.49937 11.0657 4.51232 11.1308 4.53748 11.1916C4.56264 11.2523 4.59951 11.3075 4.646 11.354C4.73989 11.4479 4.86722 11.5006 5 11.5006C5.06574 11.5006 5.13084 11.4877 5.19158 11.4625C5.25232 11.4374 5.30751 11.4005 5.354 11.354L8 8.707L10.646 11.354C10.6925 11.4005 10.7477 11.4374 10.8084 11.4625C10.8692 11.4877 10.9343 11.5006 11 11.5006C11.0657 11.5006 11.1308 11.4877 11.1916 11.4625C11.2523 11.4374 11.3075 11.4005 11.354 11.354C11.4005 11.3075 11.4374 11.2523 11.4625 11.1916C11.4877 11.1308 11.5006 11.0657 11.5006 11C11.5006 10.9343 11.4877 10.8692 11.4625 10.8084C11.4374 10.7477 11.4005 10.6925 11.354 10.646L8.707 8L11.354 5.354C11.4005 5.30751 11.4374 5.25232 11.4625 5.19158C11.4877 5.13084 11.5006 5.06574 11.5006 5C11.5006 4.93426 11.4877 4.86916 11.4625 4.80842C11.4374 4.74768 11.4005 4.69249 11.354 4.646C11.3075 4.59951 11.2523 4.56264 11.1916 4.53748C11.1308 4.51232 11.0657 4.49937 11 4.49937C10.9343 4.49937 10.8692 4.51232 10.8084 4.53748C10.7477 4.56264 10.6925 4.59951 10.646 4.646L8 7.293L5.354 4.646Z"
            fill="white"
          />
        </svg>
      </button>
      <div class="modal__wrap">
        <div class="modal__left">
          <div class="modal__info">
            <span>${dateReformat(game.released)}</span>
            <span><b>#1</b> TOP 2021</span>
            <span><b>#342</b> RPG</span>
          </div>
          <div class="modal__buttons">
            <button class="modal__button-transparent">
              <span>Where to<br /><b>BUY</b></span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.21094 7.82812H0.675781V5.26172H5.21094V0.691406H7.77734V5.26172H12.3125V7.82812H7.77734V12.3398H5.21094V7.82812Z"
                  fill="white"
                />
              </svg>
            </button>
            <button class="modal__button-green">
              <span>Add to<br /><b>WISH LIST</b></span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.6875 3.90625C4.6875 1.74889 6.43639 0 8.59375 0C10.7511 0 12.5 1.74889 12.5 3.90625C12.5 1.74889 14.2489 0 16.4062 0C18.5636 0 20.3125 1.74889 20.3125 3.90625V3.91563C20.3125 4.025 20.3125 4.3375 20.2531 4.6875H23.4375C24.3004 4.6875 25 5.38705 25 6.25V7.8125C25 8.67544 24.3004 9.375 23.4375 9.375H1.5625C0.699555 9.375 0 8.67544 0 7.8125V6.25C0 5.38705 0.699555 4.6875 1.5625 4.6875H4.74687C4.70561 4.43231 4.68574 4.17412 4.6875 3.91563V3.90625ZM6.35625 4.6875H10.9375V3.90625C10.9375 3.06891 10.4908 2.29517 9.76562 1.8765C9.04047 1.45783 8.14703 1.45783 7.42188 1.8765C6.69672 2.29517 6.25 3.06891 6.25 3.90625C6.25 4.03906 6.25313 4.33437 6.32031 4.57812C6.3297 4.61538 6.34171 4.65193 6.35625 4.6875ZM18.6437 4.6875H14.0625V3.90625C14.0625 2.61183 15.1118 1.5625 16.4062 1.5625C17.7007 1.5625 18.75 2.61183 18.75 3.90625C18.75 4.03906 18.7469 4.33437 18.6797 4.57812C18.6701 4.61533 18.6581 4.65187 18.6437 4.6875ZM23.4375 10.9375V22.6562C23.4375 23.9507 22.3882 25 21.0938 25H14.0625V10.9375H23.4375ZM1.5625 22.6562C1.5625 23.9507 2.61183 25 3.90625 25H10.9375V10.9375H1.5625V22.6562Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="modal__left-description">
          <p class="modal__game-description">
            ${game.description_raw}
          </p>
        </div>

        <div class="modal__left2">
          <div class="modal__comment-buttons">
            <button class="modal__button-gray">
              <span>Leave a comment</span
              ><svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 14C12.418 14 16 10.866 16 7C16 3.134 12.418 0 8 0C3.582 0 0 3.134 0 7C0 8.76 0.744 10.37 1.969 11.6C1.873 12.616 1.553 13.73 1.199 14.566C1.12 14.752 1.272 14.96 1.472 14.928C3.728 14.558 5.069 13.99 5.653 13.694C6.41859 13.8982 7.20765 14.0011 8 14ZM4 6C4.55228 6 5 6.44772 5 7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6ZM9 7C9 6.44772 8.55229 6 8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8C8.55229 8 9 7.55228 9 7ZM13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z"
                  fill="white"
                />
              </svg>
            </button>
            <button class="modal__button-gray">
              Write a review
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.21094 7.82812H0.675781V5.26172H5.21094V0.691406H7.77734V5.26172H12.3125V7.82812H7.77734V12.3398H5.21094V7.82812Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="modal__left">
          <div class="modal__details">
            <div class="modal__details-text-box">
              <p>Platforms</p>
              <a class="modal__hypertext">${game.parent_platforms.map(
                (platforms) => {
                  return " " + platforms.platform.name;
                }
              )}</a>
            </div>
            <div class="modal__details-text-box">
              <p>Genre</p>
              <a class="modal__hypertext">${game.genres.map((genre) => {
                return " " + genre.name;
              })}</a>
            </div>
            <div class="modal__details-text-box">
              <p>Release date</p>
              <p>${dateReformat(game.released)}</p>
            </div>
            <div class="modal__details-text-box">
              <p>Developer</p>
              <a class="modal__hypertext">${game.developers[0].name}</a>
            </div>
            <div class="modal__details-text-box">
              <p>Publisher</p>
              <a class="modal__hypertext">${game.publishers.map((publisher) => {
                return " " + publisher.name;
              })}</a>
            </div>
            <div class="modal__details-text-box">
              <p>Age rating</p>
              <p>${game.esrb_rating.name}</p>
            </div>
            <div class="modal__details-text-box">
              <p>Website</p>
              <a class="modal__hypertext">${game.website}</a>
            </div>
          </div>
        </div>
        <div class="modal__right">
        </div>
        </div>
      </div>
    </div>`
      );
      getScreenshots(game.slug);
    });
};

const closeModal = function () {
  document.querySelector(".modal-bg").classList.add("hidden");
};

//Mobile search bar toggle
const toggleSearch = function () {
  if (!header.classList.contains("--expand")) {
    header.classList.add("--expand");
  } else {
    header.classList.remove("--expand");
  }
};

//Mobile leftbar display
const displayLeftsidebar = function () {
  leftSidebar.classList.add("--display");
};

const closeLeftsidebar = function () {
  leftSidebar.classList.remove("--display");
};

//Close leftbar when clicking outside
window.addEventListener("click", function (e) {
  if (
    !leftSidebar.contains(e.target) &&
    !document.querySelector(".header__logo--shrink").contains(e.target) &&
    leftSidebar.classList.contains("--display")
  ) {
    closeLeftsidebar();
  }
});

//Logout redirection
const logout = function () {
  window.location.href = "login.html";
  document.cookie = "authToken=" + "";
};
