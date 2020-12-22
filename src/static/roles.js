const roles = [
        {
                title: "Buyer",
                description: `We are constantly working to get you access to the largest collection of luxury watches available for purchase. We hope you enjoy the ease at which you can comb through a wide range of listings and find
                the pieces that interest you. Once a watch is listed, you and other authorized dealers have three days to
                bid on the piece. If you are the highest bidder at the close of the auction, we’ll share your info with the
                seller and you can execute the transaction together.`,
                url: process.env.PUBLIC_URL+`/buyer.jpg`
        },
        {
                title:"Seller",
                description: `We want to make the watch selling process as simple as possible for you, and also get you maximum
                market value. Once you list your watch, only authorized dealers who have been vetted by Watchbidz
                will have three days to submit bids on your listing. After the auction is complete, you’ll receive the
                contact info for the winning dealer and you can coordinate the rest of the transaction with them.`,
                url: process.env.PUBLIC_URL+ `/seller.jpg`
        }
]
export default roles
