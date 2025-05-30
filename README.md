# A-Decontextualized-LLM-based-Safeguard-Technique-for-Automated-Jailbreak-Mitigation
## This repository contains the D-Shield Tool and all the analyses performed. Below are the descriptions of the analyses and the instructions for installing D-Shield
### How to install D-Shield:
- #### Prerequisites:
  - Node.js (v16 or newer) and npm
  - Git
  - OpenAI API key
- #### Clone the D-Shield repository
- #### Create an OpenAI API key https://platform.openai.com/api-keys
- #### Modify the .env file in the project root with your API key
- #### Open the terminal in the D-Shield folder and install the dependencies:
  -    npm install express dotenv openai cors
- #### Start the server:
  - node server.js
- #### The Web App will be available at http://localhost:3000


### Analysis Folder:
 In this folder there are all the analyses carried out:
 - **Confusion-Matrix-Analysis:** Jupiter notebook used to perform the confusion matrix
 - **Confusion-Matrix-Data:** Data used to perform the confusion matrix analysis
 - **Fleiss-k-Analysis:** Jupiter notebook used to perform the Fleiss k
 - **Fleiss-k-Data:** Data used to perform the Fleiss k analysis and the Majority vote
 - **Majority-vote-Analysis:** Jupiter notebook used to perform the Majority vote
 - **Majority-vote-Results**
 - **Expert-Classification-Resuts:** Contains the potentially not compliant outputs, the classification of the experts and the classification of the LLM
 - **D-Shield-Results:** Contains the results of D-shield compared to the normal version of ChatGPT-4o

