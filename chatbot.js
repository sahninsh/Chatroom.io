	const say = document.querySelector('.say');
	const chatbox = document.querySelector('.chat-container');
	let key,newdiv,ext_new,name,no_idea,arr,random;

	say.onkeydown = function(e){
		key = e.keyCode
		console.log(key)

		
			if (key == "13"){
					if (say.value == "quit()"){
						document.body.innerHTML = `
							<div style="height: 100vh;width: 100vw;background-image: url('https://cdn.hipwallpaper.com/i/98/62/HdPvS5.png');background-size: cover;">
									<div style="text-align: center;font-size: 50px;font-family: 'Montserrat';color: #fff;padding: 38vh 0 7vh 0" >Thank You</div>
									<div style="text-align: center;font-size: 20px;font-family: 'Montserrat'; color: #fff">We have marked this conversation for future reference, Always remenber you are not alone.</div>	
							</div>

							`;
					}
				newdiv = document.createElement('div');
				newdiv.classList.add('uinput');
				newdiv.innerHTML = say.value + "<br>";
				chatbox.appendChild(newdiv);
				name = say.value
				say.value = "";
				document.documentElement.scrollBy(document.querySelector('.input').offsetTop,0)


				if (name != undefined){
					ext_new = document.createElement('div');
					ext_new.innerHTML = "Hi " + name + ", How can i help you?" 
					ext_new.classList.add('text');
					ext_new.style.marginTop = "10vh";
					chatbox.appendChild(ext_new)
					document.documentElement.scrollBy(document.querySelector('.input').offsetTop,0)
				}

				say.onkeydown = function(e){
					if (say.value == "quit()"){
						document.body.innerHTML = `
							<div style="height: 100vh;width: 100vw;background-image: url('https://cdn.hipwallpaper.com/i/98/62/HdPvS5.png');background-size: cover;">
									<div style="text-align: center;font-size: 50px;font-family: 'Montserrat';color: #fff;padding: 38vh 0 7vh 0" >Thank You</div>
									<div style="text-align: center;font-size: 20px;font-family: 'Montserrat'; color: #fff">We have marked this conversation for future reference, Always remenber you are not alone.</div>	
							</div>

							`;
					}
					if (e.keyCode == "13"){
						ekdumNew = document.createElement('div');
						ekdumNew.classList.add('uinput');
						ekdumNew.innerHTML = say.value;
						chatbox.appendChild(ekdumNew);
						say.value = "";
						document.documentElement.scrollBy(document.querySelector('.input').offsetTop,0)

					setTimeout(function(){
						no_idea = document.createElement('div');
						no_idea.classList.add('text');
						arr = ['Yes I understand your concern','We will always be with you','I have conveyed your message to the concerned authorities.']
						random = Math.floor(Math.random() * 3 )
						console.log(random)
						no_idea.innerHTML = arr[random];
						no_idea.style.marginTop = "10vh"
						chatbox.appendChild(no_idea);
						document.documentElement.scrollBy(document.querySelector('.input').offsetTop,0)
					},1000);


			}


				}
			/*if (ext_new != undefined ){
				newElement = document.createElement('div')
				div.classList.add('uinput');
				div.innerHTML = say.va;
				chatbox.appendChild(newElement)
			} */
		var scroll = window.scrollTop;


		}
	}

