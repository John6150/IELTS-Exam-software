let progress = document.getElementsByClassName("progress")[0];
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let modal = document.getElementsByClassName("modal")[0];
let actMsg = document.getElementById("actMessage");
let qtopic = document.getElementById("topic");
let qcontent = document.getElementById("questioPage");
let passageTopic = document.getElementsByClassName("passageTopic")[1];
let question = document.getElementsByClassName("question")[0];
let instruction = document.getElementsByClassName("instructions")[0];
let options = document.getElementsByClassName("options")[0];

let germananswer = document.getElementsByClassName("germananswer");
let counter = document.getElementById("countdown");

let ar = [];
let docref = '0';
let quest = 1;
let current = document.getElementsByClassName("btn")[quest - 1];
let act;
let answered = false;
let questnumb;
let answers = [];
// let questions = [
//   {
//     topic: `The development of the London underground railway`,
//     passage: `You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage 1 below. \n In the first half of the 1800s, London's population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital's historic and business centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums, and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded. Amongst the most vocal advocates for a solution to London's traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson's ideas gained support amongst some businessmen, and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed. The two groups merged and established the Metropolitan Railway Company in August 1854. The company's plan was to construct an underground railway line from the Great Western Railway's (GWR) station at Paddington to the edge of the City at Farringdon Street—a distance of almost 5 km. The organization had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken, and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted. The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, the full amount was raised. The chosen route ran beneath existing main roads to minimize the expense of demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as 'cut and cover.' A trench about ten metres wide and six metres deep was dug, and the sides were temporarily held up with timber beams. Brick walls were then constructed, and finally, a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel, and the road above was rebuilt. The Metropolitan line, which opened on 10 January 1863, was the world's first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan's first year of operation, 9.5 million journeys had been made. Even as the Metropolitan began operation, the first extensions to the line were being authorized; these were built over the next five years, reaching Moorgate in the east of London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels. Despite the extension of the underground railway, by the 1880s, congestion on London's streets had become worse. The problem was partly that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital's centre. The 'cut and cover' method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground. Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn't until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world's first deep-level electric railway, the City & South London, became possible. The line opened in 1890 and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply. Although the City & South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the 'Tuppenny Tube,' began operation using new electric locomotives. It was very popular, and soon afterwards, new railways and extensions were added to the growing tube network. By 1907, the heart of today's Underground system was in place.`,

//     challenge: [
//       {
//         questioncontents: [
//           {
//             type: "german",
//             instructions: `Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer. Write your answers in <b>boxes 1-6</b> on your answer sheet.`,
//             question: `<b> The problem </b> <br><br> The <i style="color: red"> ${"________"}</i> of London increased rapidly between 1800 and 1850. The streets were full of horse-drawn vehicles.`,
//           },
//           {
//             type: "german",
//             instructions: `Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer. Write your answers in <b>boxes 1-6</b> on your answer sheet.`,
//             question: `<b>The proposed solution</b> <br><br> Charles Pearson, a solicitor, suggested building an underground railway. Building the railway would make it possible to move people to better housing in the  <i style="color: red">${"________"}</i>`,
//           },
//           {
//             type: "german",
//             instructions: `Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer. Write your answers in <b>boxes 1-6</b> on your answer sheet.`,
//             question: `A number of  <i style="color: red">${"________"}</i> agreed with Pearson's idea.`,
//           },
//           {
//             type: "german",
//             instructions: `Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer. Write your answers in <b>boxes 1-6</b> on your answer sheet.`,
//             question: `The company initially had problems getting the  <i style="color: red">${"________"}</i> needed for the project.`,
//           },
//           {
//             type: "german",
//             instructions: `Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer. Write your answers in <b>boxes 1-6</b> on your answer sheet.`,
//             question: `Negative articles about the project appeared in the  <i style="color: red">${"________"}</i>`,
//           },
//           {
//             type: "german",
//             instructions: `Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer. Write your answers in <b>boxes 1-6</b> on your answer sheet.`,
//             question: `The construction \n The chosen route did not require many buildings to be pulled down. The 'cut and cover' method was used to construct the tunnels. With the completion of the brick arch, the tunnel was covered with  <i style="color: red">${"________"}</i>`,
//           },
//           {
//             type: "bool",
//             instructions: `Do the following statements agree with the information given in Reading Passage 1? In <b><boxes 7-13</b> on your answer sheet, write: \n <b>TRUE</b> if the statement agrees with the information \n <b>FALSE</b> if the statement contradicts the information \n <b>NOT GIVEN</b> if there is no information on this`,
//             question: `Other countries had built underground railways before the Metropolitan line opened.`,
//           },
//           {
//             type: "bool",
//             instructions: `Do the following statements agree with the information given in Reading Passage 1? In <b><boxes 7-13</b> on your answer sheet, write: \n <b>TRUE</b> if the statement agrees with the information \n <b>FALSE</b> if the statement contradicts the information \n <b>NOT GIVEN</b> if there is no information on this`,
//             question: `More people than predicted traveled on the Metropolitan line on the first day.`,
//           },
//           {
//             type: "bool",
//             instructions: `Do the following statements agree with the information given in Reading Passage 1? In <b><boxes 7-13</b> on your answer sheet, write: \n <b>TRUE</b> if the statement agrees with the information \n <b>FALSE</b> if the statement contradicts the information \n <b>NOT GIVEN</b> if there is no information on this`,
//             question: `The use of ventilation shafts failed to prevent pollution in the tunnels.`,
//           },
//           {
//             type: "bool",
//             instructions: `Do the following statements agree with the information given in Reading Passage 1? In <b><boxes 7-13</b> on your answer sheet, write: \n <b>TRUE</b> if the statement agrees with the information \n <b>FALSE</b> if the statement contradicts the information \n <b>NOT GIVEN</b> if there is no information on this`,
//             question: `A different approach from the 'cut and cover' technique was required in London's central area.`,
//           },
//           {
//             type: "bool",
//             instructions: `Do the following statements agree with the information given in Reading Passage 1? In <b><boxes 7-13</b> on your answer sheet, write: \n <b>TRUE</b> if the statement agrees with the information \n <b>FALSE</b> if the statement contradicts the information \n <b>NOT GIVEN</b> if there is no information on this`,
//             question: `The windows on City & South London trains were at eye level. `,
//           },
//           {
//             type: "bool",
//             instructions: `Do the following statements agree with the information given in Reading Passage 1? In <b><boxes 7-13</b> on your answer sheet, write: \n <b>TRUE</b> if the statement agrees with the information \n <b>FALSE</b> if the statement contradicts the information \n <b>NOT GIVEN</b> if there is no information on this`,
//             question: `The City & South London Railway was a financial success.`,
//           },
//           {
//             type: "bool",
//             instructions: `Do the following statements agree with the information given in Reading Passage 1? In <b><boxes 7-13</b> on your answer sheet, write: \n <b>TRUE</b> if the statement agrees with the information \n <b>FALSE</b> if the statement contradicts the information \n <b>NOT GIVEN</b> if there is no information on this`,
//             question: `Trains on the 'Tuppenny Tube' nearly always ran on time.`,
//           },
//         ],
//       },
//     ],
//   },
// ];

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

let questions = [];
const firebaseConfig = {
  apiKey: "AIzaSyAhM_nLT1GX0zq0LFm_ri915sxSavZmDi4",
  authDomain: "ielts-project-30579.firebaseapp.com",
  projectId: "ielts-project-30579",
  storageBucket: "ielts-project-30579.appspot.com",
  messagingSenderId: "1000205517144",
  appId: "1:1000205517144:web:4b567528e193eb70cae52d",
  measurementId: "G-Y1JM7CBX3S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
async function readDatabase() {
  await db
    .collection("questions")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        questions = {
          topic: doc.data().questions.topic,
          passage: doc.data().questions.passage,
          challenge: [
            {
              questioncontents:
                doc.data().questions.challenge[0].questioncontents,
            },
          ],
        };
        // console.log(doc.data().questions.challenge[0].questioncontents);
      });
    });
  instruction.innerHTML =
    questions["challenge"][0]["questioncontents"][0]["instructions"];
  question.innerHTML =
    questions["challenge"][0]["questioncontents"][quest - 1]["question"];
  questnumb = questions["challenge"][0]["questioncontents"].length;

  passageTopic.innerHTML = `${questions["topic"]}`;
  qcontent.innerHTML = questions["passage"];

  for (let x = 0; x < questnumb; x++) {
    progress.innerHTML += `<button class="btn">${x + 1}</button>`;
    answers.push({ ans: false, value: "" });
  }

  init();
  qGen();
  countdown();
}
readDatabase();

function init() {
  quest == 1
    ? (document.getElementsByClassName("btn")[quest - 1].style.backgroundColor =
        "black")
    : (document.getElementsByClassName("btn")[quest - 2].style.backgroundColor =
        "black");

  quest < questnumb
    ? (document.getElementsByClassName("btn")[quest].style.backgroundColor =
        "black")
    : "";
  document.getElementsByClassName("btn")[quest - 1].style.backgroundColor =
    "rgb(38, 38, 115)";

  quest == 1
    ? (prev.style.backgroundColor = "grey")
    : (prev.style.backgroundColor = "black");
  quest == questnumb
    ? (next.style.backgroundColor = "grey")
    : (next.style.backgroundColor = "black");
  answered = true;
}

function input() {}

let timer = 3600;
function countdown() {
  setInterval(() => {
    timer -= 1;
    // console.log(timer);
    counter.innerHTML = `${Math.floor(timer / 60)} : ${(timer % 60)
      .toString()
      .padStart(2, "0")}`;

    if (timer == 0) {
      clearInterval();
      alert("Time's up!");
      action(2);
      actionfulfil();
    }
  }, 1000);
}

function answer(ans) {
  answers[quest - 1]["ans"] = true;
  answers[quest - 1]["ans"]
    ? ((document.getElementsByClassName("btn")[
        quest - 1
      ].style.backgroundColor = "rgb(117, 117, 209)"),
      (document.getElementsByClassName("btn")[quest - 1].style.color = "black"))
    : (document.getElementsByClassName("btn")[quest - 1].style.backgroundColor =
        "black");
  ans == undefined
    ? (answers[quest - 1]["value"] = `${germananswer[0].value}`)
    : (answers[quest - 1]["value"] = ans);
  answers[quest - 1]["question number"] = quest;
  answers[quest - 1]["question"] =
    questions["challenge"][0]["questioncontents"][quest - 1]["question"];
}

function backward() {
  quest == 1 ? (quest = 1) : (quest -= 1);
  init();
  qGen();
  chkans();
}

function forward() {
  quest == questnumb ? (quest = questnumb) : (quest += 1);
  init();
  chkans();
  qGen();
}
function action(x) {
  act = x;
  act == 1
    ? (actMsg.innerHTML = "Are you sure you want to quit")
    : (actMsg.innerHTML = "Are you sure you want to submit test?");
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

async function actionfulfil() {
  closeModal();
  const db = firebase.firestore();

  if (act == 1) {
    window.location.href = "./index.html";
  } else {

    for (let index = 0; index < 6; index++) {
      docref += Math.floor(Math.random()*10) 
    }
    console.log(docref);
    
    
    for (let i = 0; i < quest; i++) {
      await db
      .collection(`answers ${docref}`)
      .doc()
      .set({
        answer: `${answers[i]['value']}`,
        question: `${answers[i]['question']}`,
        questionnumber: `${answers[i]['question number']}`,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      })      
    }
      alert("Test Submitted");
  }

  act == 1 ? "" : (window.location.href = "./index.html");
}
function chkans() {
  //   console.log("yes");

  for (let x = 0; x < questnumb; x++) {
    answers[x]["ans"] == true
      ? ((document.getElementsByClassName("btn")[x].style.backgroundColor =
          "rgb(117, 117, 209)"),
        (document.getElementsByClassName("btn")[x].style.color = "black"))
      : ((document.getElementsByClassName("btn")[
          quest - 1
        ].style.backgroundColor = "rgb(38, 38, 115)"),
        (document.getElementsByClassName("btn")[x].style.color = "white"));
  }
  (document.getElementsByClassName("btn")[quest - 1].style.backgroundColor =
    "rgb(38, 38, 115)"),
    (document.getElementsByClassName("btn")[quest - 1].style.color = "white");
}

function qGen() {
  instruction.innerHTML =
    questions["challenge"][0]["questioncontents"][quest - 1]["instructions"];
  switch (questions["challenge"][0]["questioncontents"][quest - 1]["type"]) {
    case "german":
      if (answers[quest - 1]["value"] == "") {
        options.innerHTML = "";
        options.innerHTML = ` <i>Answer: <input oninput="answer()" class="germananswer" style="border: none; border-bottom: 2px solid black; background: none; padding: 5px; font-size: 20px" type="text"></i>`;
      } else {
        options.innerHTML = "";
        options.innerHTML = ` <i>Answer: <input value="${
          answers[quest - 1]["value"]
        }" oninput="answer()" class="germananswer" style="border: none; border-bottom: 2px solid black; background: none; padding: 5px; font-size: 20px" type="text"></i>`;
      }
      question.innerHTML =
        questions["challenge"][0]["questioncontents"][quest - 1]["question"];
      break;

    case "bool":
      if (answers[quest - 1]["value"] == "") {
        // console.log("emt");
        options.innerHTML = "";
        options.innerHTML = `
                              <label for="opt1">
                    <input
                    onclick="answer('true')"
                      style="width: 20px; height: 20px"
                      name="opt"
                      id="opt1"
                      value="true"
                      type="radio"
                    />
                    &nbsp; True
                  </label>

                  <label for="opt2">
                    <input
                    onclick="answer('false')"
                      style="width: 20px; height: 20px"
                      name="opt"
                      id="opt2"
                      value="false"
                      type="radio"
                    />&nbsp; False
                  </label>

        `;
      } else {
        options.innerHTML = "";
        if (answers[quest - 1]["value"] == "false") {
          options.innerHTML = `
            <label for="opt1">
                <input
                onclick="answer('true')"
                  style="width: 20px; height: 20px"
                  name="opt"
                  id="opt1"
                  value="true"
                  type="radio"
                />
                &nbsp; True
              </label>

              <label for="opt2">
                <input
                checked
                onclick="answer('false')"
                  style="width: 20px; height: 20px"
                  name="opt"
                  id="opt2"
                  value="false"
                  type="radio"
                />&nbsp; False
            </label>
    `;
        } else {
          options.innerHTML = `
            <label for="opt1">
                <input
                checked
                onclick="answer('true')"
                  style="width: 20px; height: 20px"
                  name="opt"
                  id="opt1"
                  value="true"
                  type="radio"
                />
                &nbsp; True
              </label>

              <label for="opt2">
                <input
                onclick="answer('false')"
                  style="width: 20px; height: 20px"
                  name="opt"
                  id="opt2"
                  value="false"
                  type="radio"
                />&nbsp; False
            </label>
    `;
        }
      }

      question.innerHTML =
        questions["challenge"][0]["questioncontents"][quest - 1]["question"];
      break;
    default:
      break;
  }
}

// console.log(questions);
