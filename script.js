document.addEventListener("DOMContentLoaded", function () {
    // Массив с данными о героях
    const heroes = [
        { name: "Alchemist", attribute: "Strength", imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/alchemist_full.png" },
        { name: "Axe", attribute: "Strength", imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/axe_full.png" },
        { name: "Bristleback", attribute: "Strength", imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/bristleback_full.png" },
        { name: "Centaur Warrunner", attribute: "Strength", imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/centaur_full.png" },
        { name: "Chaos Knight", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png" },
        { name: "Dawnbreaker", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png" },
        { name: "Doom", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png" },
        { name: "Dragon knight", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png" },
        { name: "Earth Spirit", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png" },
        { name: "Earthshaker", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png" },
        { name: "Elder Titan", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png" },
        { name: "Huskar", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png" },
        { name: "Kunkka", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png" },
        { name: "Legion Commander", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png" },
        { name: "Lifestealer", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png" },
        { name: "Mars", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png" },
        { name: "Night Stalker", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png" },
        { name: "Ogre Magi", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png" },
        { name: "Omniknight", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png" },
        { name: "Primal Beast", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png" },
        { name: "Pudge", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png" },
        { name: "Slardar", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png" },
        { name: "Spirit Breaker", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png" },
        { name: "Sven", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png" },
        { name: "Tidehunter", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png" },
        { name: "Timbersaw", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png" },
        { name: "Tiny", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png" },
        { name: "Treant Protector", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png" },
        { name: "Tusk", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png" },
        { name: "Underlord", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png" },
        { name: "Undying", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png" },
        { name: "Wraith King", attribute: "Strength", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png" },
        { name: "Anti Mage", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png" },
        { name: "Arc Warden", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png" },
        { name: "Bloodseeker", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png" },
        { name: "Bounty Hunter", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png" },
        { name: "Clinkz", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png" },
        { name: "Drow Ranger", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png" },
        { name: "Ember Spirit", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png" },
        { name: "Faceless Void", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png" },
        { name: "Gyrocopter", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png" },
        { name: "Hoodwink", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png" },
        { name: "Juggernaut", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png" },
        { name: "Luna", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png" },
        { name: "Medusa", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png" },
        { name: "Meepo", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png" },
        { name: "Monkey King", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png" },
        { name: "Morphling", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png" },
        { name: "Naga Siren", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png" },
        { name: "Phantom Assasin", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png" },
        { name: "Phantom Lancer", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png" },
        { name: "Razor", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png" },
        { name: "Riki", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png" },
        { name: "Shadow Fiend", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png" },
        { name: "Slark", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png" },
        { name: "Sniper", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png" },
        { name: "Spectre", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png" },
        { name: "Templar Assasin", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png" },
        { name: "Terroblade", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png" },
        { name: "Troll Warlord", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png" },
        { name: "Ursa", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png" },
        { name: "Viper", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png" },
        { name: "Weaver", attribute: "Agility", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png" },
        { name: "Ancient Apparition", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png" },
        { name: "Crystal Maiden", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png" },
        { name: "Death Prophet", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png" },
        { name: "Disruptor", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png" },
        { name: "Enchantress", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png" },
        { name: "Grimstroke", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png" },
        { name: "Jakiro", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png" },
        { name: "Keeper Of The Light", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png" },
        { name: "Leshrac", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png" },
        { name: "Lich", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png" },
        { name: "Lina", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png" },
        { name: "Lion", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png" },
        { name: "Muerta", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png" },
        { name: "Nature's Prophet", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png" },
        { name: "Necrophos", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png" },
        { name: "Oracle", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png" },
        { name: "Outworld Destroyer", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png" },
        { name: "Puck", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png" },
        { name: "Pugna", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png" },
        { name: "Queen Of Pain", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png" },
        { name: "Ringmaster", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ringmaster.png" },
        { name: "Rubick", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png" },
        { name: "Shadow Demon", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png" },
        { name: "Shadow Shaman", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png" },
        { name: "Silencer", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png" },
        { name: "Skywrath Mage", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png" },
        { name: "Storm Spirit", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png" },
        { name: "Tinker", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png" },
        { name: "Warlock", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png" },
        { name: "Witch Doctor", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png" },
        { name: "Zeus", attribute: "Intelligence", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png" },
        { name: "Abaddon", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png" },
        { name: "Bane", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png" },
        { name: "Batrider", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png" },
        { name: "Beastmaster", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png" },
        { name: "Brewmaster", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png" },
        { name: "Broodmother", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png" },
        { name: "Chen", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png" },
        { name: "Clockwerk", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png" },
        { name: "Dark Seer", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png" },
        { name: "Dark Willow", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png" },
        { name: "Dazzle", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png" },
        { name: "Enigma", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png" },
        { name: "Invoker", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png" },
        { name: "Io", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png" },
        { name: "Lone Druid", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png" },
        { name: "Lycan", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png" },
        { name: "Magnus", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png" },
        { name: "Marci", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png" },
        { name: "Mirana", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png" },
        { name: "Nyx Assassin", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png" },
        { name: "Pangolier", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png" },
        { name: "Phoenix", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png" },
        { name: "Sand King", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png" },
        { name: "Snapfire", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png" },
        { name: "Techies", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png" },
        { name: "Vengeful Spirit", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png" },
        { name: "Venomancer", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png" },
        { name: "Visage", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png" },
        { name: "Void Spirit", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png" },
        { name: "Windranger", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png" },
        { name: "Winter Wyvern", attribute: "Universal", imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png" },
    ];

    // Контейнеры для каждой категории героев
    const strengthContainer = document.querySelector('#strength-heroes .heroes-list');
    const agilityContainer = document.querySelector('#agility-heroes .heroes-list');
    const intelligenceContainer = document.querySelector('#intelligence-heroes .heroes-list');
    const universalContainer = document.querySelector('#universal-heroes .heroes-list');
    
    heroes.forEach(hero => {
        const heroElement = document.createElement('div');
        heroElement.classList.add('hero');
    
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.id = `modal-${hero.name.replace(/\s+/g, '-').toLowerCase()}`;
    
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        
        const close = document.createElement('span');
        close.classList.add('close');
        close.innerHTML = `&times;`;
    
        // Добавляем информацию о герое в модальное окно
        modalContent.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.imageUrl}" alt="${hero.name}">
            <p><strong>Attribute:</strong> ${hero.attribute}</p>
        `;
        modalContent.appendChild(close);
        modal.appendChild(modalContent);
    
        heroElement.innerHTML = `
            <img src="${hero.imageUrl}" alt="${hero.name}">
            <h4 class="name">${hero.name}</h4>
        `;
    
        switch (hero.attribute) {
            case 'Strength':
                heroElement.classList.add('strength');
                strengthContainer.appendChild(heroElement);
                strengthContainer.appendChild(modal);
                break;
            case 'Agility':
                heroElement.classList.add('agility');
                agilityContainer.appendChild(heroElement);
                agilityContainer.appendChild(modal);
                break;
            case 'Intelligence':
                heroElement.classList.add('intelligence');
                intelligenceContainer.appendChild(heroElement);
                intelligenceContainer.appendChild(modal);
                break;
            case 'Universal':
                heroElement.classList.add('universal');
                universalContainer.appendChild(heroElement);
                universalContainer.appendChild(modal);
                break;
        }
    
        heroElement.addEventListener('click', function () {
            modal.style.display = "block";
        });
    
        close.addEventListener('click', function () {
            modal.style.display = "none";
        });
    
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });
});

// Обработчик формы
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Спасибо, ${name}, ваше сообщение отправлено!`);
    });
});

