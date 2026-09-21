const form = document.getElementById("contact-form");
const button = document.getElementById("submit-btn");
const result = document.getElementById("result-message");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";

    const data = new FormData(form);

    try{

        const response = await fetch(form.action,{
            method:"POST",
            body:data,
            headers:{
                "Accept":"application/json"
            }
        });

        if(response.ok){

            result.textContent = "送信済み";
            result.className = "success show";

            setTimeout(() => {
               result.classList.remove("show");

               setTimeout(() => {
                    result.textContent = "";
                    result.className = "";
                }, 500);
            }, 3000);
            form.reset();

        }else{

            result.textContent = "送信に失敗しました。";
            result.className = "error show";

            setTimeout(() => {
                result.classList.remove("show");

                setTimeout(() => {
                    result.textContent = "";
                    result.className = "";
                }, 500);
            }, 3000);


        }

    }catch(error){

        result.textContent = "通信エラーが発生しました。";

    }

    button.disabled = false;
    button.textContent = "Send";

});