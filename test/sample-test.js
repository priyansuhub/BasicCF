const { expect } = require("chai");
const { ethers } = require("hardhat");

const projectName = [
  "Priyansu Rath",
  "Aditya Singh Panwar",
  "Sonali Tripathy",
  "Vivek Ranjan",
  "Purvi Purnima",
];
const projectDescription = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere",
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee",
  "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.",
  "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To",
];
const creatorName = [
  "God Kumar Singh",
  "Ramu Kaka",
  "Gujjar Naruto",
  "Itachi pitaji",
  "Goku Sardar",
];

const projectLink = [
  "https://www.instagram.com/",
  "https://github.com/Uniswap/v2-periphery/blob/master/contracts/examples/ExampleOracleSimple.sol",
  "https://docs.uniswap.org/protocol/V2/concepts/protocol-overview/how-uniswap-works",
  "https://www.youtube.com/watch?v=FNpkUNHHn7c&list=PLO5VPQH6OWdX-Rh7RonjZhOd9pb9zOnHW&index=26",
  "https://www.youtube.com/watch?v=-JhgcqvyYeM",
];
const cid = ["0", "1", "2", "3", "4"];

const fundingGoal = [100, 200, 300, 400, 500];

const duration = [10, 20, 30, 40, 50];

const category = [0, 1, 2];

const refundPolicy = [0, 1];

describe("Croudfunding", function () {
  before(async function () {
    CroudFunding = await ethers.getContractFactory("Crowdfunding");
    cf = await CroudFunding.deploy();
    await cf.deployed();
  });
  beforeEach(async function () {
    const owner = await ethers.getSigners();
    await cf.connect(owner[0]);
    console.log("msg.sender=" + owner[0].address);

    await cf.createNewProject(
      projectName[0],
      projectDescription[0],
      creatorName[0],
      projectLink[0],
      cid[0],
      fundingGoal[0],
      duration[0],
      category[0],
      refundPolicy[0]
    );
    await cf.connect(owner[1]);
    console.log("msg.sender=" + owner[1].address);
    await cf.createNewProject(
      projectName[1],
      projectDescription[1],
      creatorName[1],
      projectLink[1],
      cid[1],
      fundingGoal[1],
      duration[1],
      category[0],
      refundPolicy[0]
    );
    await cf.connect(owner[2]);
    console.log("msg.sender=" + owner[2].address);
    await cf.createNewProject(
      projectName[2],
      projectDescription[2],
      creatorName[2],
      projectLink[2],
      cid[2],
      fundingGoal[2],
      duration[2],
      category[1],
      refundPolicy[0]
    );
    await cf.connect(owner[3]);
    console.log("msg.sender=" + owner[3].address);
    await cf.createNewProject(
      projectName[3],
      projectDescription[3],
      creatorName[3],
      projectLink[3],
      cid[3],
      fundingGoal[3],
      duration[3],
      category[1],
      refundPolicy[1]
    );
    await cf.connect(owner[4]);
    console.log("msg.sender=" + owner[4].address);
    await cf.createNewProject(
      projectName[4],
      projectDescription[4],
      creatorName[4],
      projectLink[4],
      cid[4],
      fundingGoal[4],
      duration[4],
      category[0],
      refundPolicy[1]
    );
  });
  it("Display All the Project Details", async function () {
    let val = await cf.getAllProjectsDetail();
    for (let i = 0; i < val.length; i++) {
      console.log({
        Name: val[i][0].toString(),
        Description: val[i][1].toString(),
        Creator: val[i][2].toString(),
        CID: val[i][3].toString(),
        GOAL: val[i][4].toString(),
        AmountRaised: val[i][5].toString(),
        NumberOfContrib: val[i][6].toString(),
        CreationTime: val[i][7].toString(),
        Duration: val[i][8].toString(),
        category: val[i][9].toString(),
      });
    }
  });
});
