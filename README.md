# Croudfunding with Automated Liquidity

    Decentralisation solves the problem of croudfunding

    Ethereum is a Public blockchain

    So everything that is unencrypted is visible to everyone
        (Unless we use a oracle ofc)

    hence Developers came up with a croudfunding applications

    in general!

# NOTE:

**THIS PROJECT IS DIVIDED INTO TWO PARTS**

**This is the backend part of the Project**

Frontend !Link HERE

The project that i am creating is just a Prototype

for **MLH** prep **(MAJOR LEAGUE HACKING)**

and is in progress and will be in progress unless the

second part i.e. peer to peer quick doctor checkup with

smart watch health fetch app is created!

# My Idea

    Let us dedicate a croudfunding application completely

    non profit only for medical usage with a automated

    onchain bank system.

## What problem does it solve?

- A dedicated On chain platform for medical donation

- Easy KYC if needed

- Eleminates the choice issue for donating

## How does it eleminate Choice issue?

    Well thats the whole concept of automated onchain bank

    so, what it does is it (depending upon the number of upvotes)

    puts the donation in a QUEUE and depending upon the

    liquidity fullfills the remaining donation required

    for the Proposal!

## How do we provide Liquidity?

    Those people who cant decide where to fund can directly

    add liquidity to the smart contract bank

## How do the Voting mechanism work?

    Keeping in mind the fact that if everyone votes then

    mass voting by a particular social media influencer can

    alter or manipulate the flow of queue

    therefore we are left with 2 OPTIONS

### Option A:

    Manual KYC

### Option B:

    Pay some money to vote

# Function Explained

Function creates each Proposal

```
    createNewProject(
        string memory _name,
        string memory _desc,
        string memory _creatorName,
        string memory _projectLink,
        string memory _cid,
        uint256 _fundingGoal,
        uint256 _duration,
        Category _category,
        RefundPolicy _refundPolicy
    )
```

Function returns all the Proposal DETAILS only

```
    getAllProjectsDetail()
```

Function returns DETAILS of the specific index

```
    getProjectsDetail(uint index)
```
