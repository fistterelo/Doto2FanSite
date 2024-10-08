const heroes = [
    { name: "Alchemist", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/alchemist_full.png" },
    { name: "Axe", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/axe_full.png" },
    { name: "Bristleback", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/bristleback_full.png" },
    { name: "Centaur Warrunner", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/centaur_full.png" },
    { name: "Chaos Knight", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png" },
    { name: "Dawnbreaker", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png" },
    { name: "Doom", attribute: "Strength", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png" },
    { name: "Dragon knight", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png" },
    { name: "Earth Spirit", attribute: "Strength", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png" },
    { name: "Earthshaker", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png" },
    { name: "Elder Titan", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png" },
    { name: "Huskar", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png" },
    { name: "Kunkka", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png" },
    { name: "Legion Commander", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png" },
    { name: "Lifestealer", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png" },
    { name: "Mars", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png" },
    { name: "Night Stalker", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png" },
    { name: "Ogre Magi", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png" },
    { name: "Omniknight", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png" },
    { name: "Primal Beast", attribute: "Strength", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png" },
    { name: "Pudge", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png" },
    { name: "Slardar", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png" },
    { name: "Spirit Breaker", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png" },
    { name: "Sven", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png" },
    { name: "Tidehunter", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png" },
    { name: "Timbersaw", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png" },
    { name: "Tiny", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png" },
    { name: "Treant Protector", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png" },
    { name: "Tusk", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png" },
    { name: "Underlord", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png" },
    { name: "Undying", attribute: "Strength", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png" },
    { name: "Wraith King", attribute: "Strength", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png" },
    { name: "Anti Mage", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png" },
    { name: "Arc Warden", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png" },
    { name: "Bloodseeker", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png" },
    { name: "Bounty Hunter", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png" },
    { name: "Clinkz", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png" },
    { name: "Drow Ranger", attribute: "Agility", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png" },
    { name: "Ember Spirit", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png" },
    { name: "Faceless Void", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png" },
    { name: "Gyrocopter", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png" },
    { name: "Hoodwink", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png" },
    { name: "Juggernaut", attribute: "Agility", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png" },
    { name: "Luna", attribute: "Agility", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png" },
    { name: "Medusa", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png" },
    { name: "Meepo", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png" },
    { name: "Monkey King", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png" },
    { name: "Morphling", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png" },
    { name: "Naga Siren", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png" },
    { name: "Phantom Assasin", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png" },
    { name: "Phantom Lancer", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png" },
    { name: "Razor", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png" },
    { name: "Riki", attribute: "Agility", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png" },
    { name: "Shadow Fiend", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png" },
    { name: "Slark", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png" },
    { name: "Sniper", attribute: "Agility", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png" },
    { name: "Spectre", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png" },
    { name: "Templar Assasin", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png" },
    { name: "Terroblade", attribute: "Agility", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png" },
    { name: "Troll Warlord", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png" },
    { name: "Ursa", attribute: "Agility", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png" },
    { name: "Viper", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png" },
    { name: "Weaver", attribute: "Agility", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png" },
    { name: "Ancient Apparition", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png" },
    { name: "Crystal Maiden", attribute: "Intelligence", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png" },
    { name: "Death Prophet", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png" },
    { name: "Disruptor", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png" },
    { name: "Enchantress", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png" },
    { name: "Grimstroke", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png" },
    { name: "Jakiro", attribute: "Intelligence", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png" },
    { name: "Keeper Of The Light", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png" },
    { name: "Leshrac", attribute: "Intelligence", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png" },
    { name: "Lich", attribute: "Intelligence", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png" },
    { name: "Lina", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png" },
    { name: "Lion", attribute: "Intelligence", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png" },
    { name: "Muerta", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png" },
    { name: "Nature's Prophet", attribute: "Intelligence", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png" },
    { name: "Necrophos", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png" },
    { name: "Oracle", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png" },
    { name: "Outworld Destroyer", attribute: "Intelligence", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png" },
    { name: "Puck", attribute: "Intelligence", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png" },
    { name: "Pugna", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png" },
    { name: "Queen Of Pain", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png" },
    { name: "Rubick", attribute: "Intelligence", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png" },
    { name: "Silencer", attribute: "Intelligence", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png" },
    { name: "Skywrath Mage", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png" },
    { name: "Storm Spirit", attribute: "Intelligence", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png" },
    { name: "Techies", attribute: "Intelligence", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png" },
    { name: "Tinker", attribute: "Intelligence", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png" },
    { name: "Warlock", attribute: "Intelligence", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png" },
    { name: "Witch Doctor", attribute: "Intelligence", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png" },
    { name: "Zeus", attribute: "Intelligence", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png" },
    { name: "Abaddon", attribute: "Universal", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png" },
    { name: "Bane", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png" },
    { name: "Batrider", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png" },
    { name: "Beastmaster", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png" },
    { name: "Brewmaster", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png" },
    { name: "Broodmother", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png" },
    { name: "Chen", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png" },
    { name: "Clockwerk", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png" },
    { name: "Dark Seer", attribute: "Universal", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png" },
    { name: "Dark Willow", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png" },
    { name: "Dazzle", attribute: "Universal", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png" },
    { name: "Enigma", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png" },
    { name: "Invoker", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png" },
    { name: "Io", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png" },
    { name: "Lone Druid", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png" },
    { name: "Lycan", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png" },
    { name: "Magnus", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png" },
    { name: "Marci", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png" },
    { name: "Mirana", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png" },
    { name: "Nyx Assassin", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png" },
    { name: "Pangolier", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png" },
    { name: "Phoenix", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png" },
    { name: "Sand King", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png" },
    { name: "Snapfire", attribute: "Universal", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png" },
    { name: "Techies", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png" },
    { name: "Vengeful Spirit", attribute: "Universal", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png" },
    { name: "Venomancer", attribute: "Universal", difficulty: 1, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png" },
    { name: "Visage", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png" },
    { name: "Void Spirit", attribute: "Universal", difficulty: 3, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png" },
    { name: "Windranger", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png" },
    { name: "Winter Wyvern", attribute: "Universal", difficulty: 2, imageUrl: "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png" },
];


document.addEventListener("DOMContentLoaded", function () {
    const strengthContainer = document.querySelector('#strength-heroes .heroes-list');
    const agilityContainer = document.querySelector('#agility-heroes .heroes-list');
    const intelligenceContainer = document.querySelector('#intelligence-heroes .heroes-list');
    const universalContainer = document.querySelector('#universal-heroes .heroes-list');

    const diamonds = document.querySelectorAll('.diamond');
    let selectedDifficulty = 0;

    function displayHeroes(difficultyFilterValue = 0) {
        strengthContainer.innerHTML = '';
        agilityContainer.innerHTML = '';
        intelligenceContainer.innerHTML = '';
        universalContainer.innerHTML = '';

        heroes.forEach(hero => {
            if (difficultyFilterValue === 0 || hero.difficulty === difficultyFilterValue) {
                const heroElement = document.createElement('div');
                heroElement.classList.add('hero', hero.attribute.toLowerCase()); // Добавляем класс атрибута

                const modal = document.createElement('div');
                modal.classList.add('modal');
                modal.id = `modal-${hero.name.replace(/\s+/g, '-').toLowerCase()}`;

                const modalContent = document.createElement('div');
                modalContent.classList.add('modal-content');

                function createDifficultyDiamonds(difficulty) {
                    let diamondsHtml = '';
                    for (let i = 1; i <= 3; i++) {
                        if (i <= difficulty) {
                            diamondsHtml += `<span class="diamond active"></span>`;
                        } else {
                            diamondsHtml += `<span class="diamond"></span>`;
                        }
                    }
                    return diamondsHtml;
                }

                modalContent.innerHTML = `
                    <span class="close">&times;</span>
                    <h2>${hero.name}</h2>
                    <img src="${hero.imageUrl}" alt="${hero.name}">
                    <p>Attribute: <strong>${hero.attribute}</strong></p>
                    <p>Difficulty:</p>
                    <div class="difficulty-container">
                        ${createDifficultyDiamonds(hero.difficulty)}
                    </div>
                `;
                modal.appendChild(modalContent);

                heroElement.innerHTML = `
                    <img src="${hero.imageUrl}" alt="${hero.name}">
                    <h4 class="name">${hero.name}</h4>
                `;

                switch (hero.attribute) {
                    case 'Strength':
                        strengthContainer.appendChild(heroElement);
                        strengthContainer.appendChild(modal);
                        break;
                    case 'Agility':
                        agilityContainer.appendChild(heroElement);
                        agilityContainer.appendChild(modal);
                        break;
                    case 'Intelligence':
                        intelligenceContainer.appendChild(heroElement);
                        intelligenceContainer.appendChild(modal);
                        break;
                    case 'Universal':
                        universalContainer.appendChild(heroElement);
                        universalContainer.appendChild(modal);
                        break;
                }

                heroElement.addEventListener('click', function () {
                    modal.style.display = "block";
                });

                const close = modal.querySelector('.close');
                close.addEventListener('click', function () {
                    modal.style.display = "none";
                });

                window.addEventListener('click', function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                });
            }
        });
    }

    diamonds.forEach((diamond, index) => {
        diamond.addEventListener('click', () => {
            if (selectedDifficulty === index + 1) {
                selectedDifficulty = 0;
                diamonds.forEach(d => d.classList.remove('active'));
            } else {
                diamonds.forEach((d, i) => {
                    if (i <= index) {
                        d.classList.add('active');
                    } else {
                        d.classList.remove('active');
                    }
                });
                selectedDifficulty = index + 1;
            }

            displayHeroes(selectedDifficulty);
        });
    });

    displayHeroes(0);
});

// Функция для фильтрации героев
function filterHeroes(container, searchInput) {
    const searchTerm = searchInput.value.toLowerCase();
    const heroes = container.querySelectorAll('.hero');

    heroes.forEach(hero => {
        const name = hero.querySelector('.name').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            hero.style.display = "block";
        } else {
            hero.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Получаем ссылки на все контейнеры и поля поиска
    const searchBarStrength = document.getElementById('searchBarStrength');
    const searchBarAgility = document.getElementById('searchBarAgility');
    const searchBarIntelligence = document.getElementById('searchBarIntelligence');
    const searchBarUniversal = document.getElementById('searchBarUniversal');

    const strengthContainer = document.querySelector('#strength-heroes .heroes-list');
    const agilityContainer = document.querySelector('#agility-heroes .heroes-list');
    const intelligenceContainer = document.querySelector('#intelligence-heroes .heroes-list');
    const universalContainer = document.querySelector('#universal-heroes .heroes-list');

    // Добавляем обработчики событий на поля поиска
    searchBarStrength.addEventListener('input', function () {
        filterHeroes(strengthContainer, searchBarStrength);
    });

    searchBarAgility.addEventListener('input', function () {
        filterHeroes(agilityContainer, searchBarAgility);
    });

    searchBarIntelligence.addEventListener('input', function () {
        filterHeroes(intelligenceContainer, searchBarIntelligence);
    });

    searchBarUniversal.addEventListener('input', function () {
        filterHeroes(universalContainer, searchBarUniversal);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Функция для фильтрации героев
    function filterHeroes(container, searchInput) {
        const searchTerm = searchInput.value.toLowerCase();
        const heroes = container.querySelectorAll('.hero');

        heroes.forEach(hero => {
            const name = hero.querySelector('.name').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                hero.style.display = "block";
            } else {
                hero.style.display = "none";
            }
        });
    }

    // Получаем ссылки на все контейнеры и поля поиска
    const searchBarStrength = document.getElementById('searchBarStrength');
    const searchBarAgility = document.getElementById('searchBarAgility');
    const searchBarIntelligence = document.getElementById('searchBarIntelligence');
    const searchBarUniversal = document.getElementById('searchBarUniversal');

    const strengthContainer = document.querySelector('#strength-heroes .heroes-list');
    const agilityContainer = document.querySelector('#agility-heroes .heroes-list');
    const intelligenceContainer = document.querySelector('#intelligence-heroes .heroes-list');
    const universalContainer = document.querySelector('#universal-heroes .heroes-list');

    // Добавляем обработчики событий на поля поиска
    searchBarStrength.addEventListener('input', function () {
        filterHeroes(strengthContainer, searchBarStrength);
    });

    searchBarAgility.addEventListener('input', function () {
        filterHeroes(agilityContainer, searchBarAgility);
    });

    searchBarIntelligence.addEventListener('input', function () {
        filterHeroes(intelligenceContainer, searchBarIntelligence);
    });

    searchBarUniversal.addEventListener('input', function () {
        filterHeroes(universalContainer, searchBarUniversal);
    });

    // Добавляем анимацию открытия и закрытия списка героев через кнопку
    const heroCategories = document.querySelectorAll('.hero-category');

    heroCategories.forEach(category => {
        const toggleButton = category.querySelector('.toggle-button');

        toggleButton.addEventListener('click', function () {
            category.classList.toggle('open'); // Переключаем класс open
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const randomHeroButton = document.getElementById('randomHeroButton');

    // Функция для выбора случайного героя
    function getRandomHero() {
        const randomIndex = Math.floor(Math.random() * heroes.length);
        return heroes[randomIndex];
    }

    // Открытие модального окна с случайным героем
    randomHeroButton.addEventListener('click', function () {
        const randomHero = getRandomHero();

        // Удаляем предыдущее модальное окно, если оно существует
        const existingModal = document.getElementById('randomHeroModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Создаем новое модальное окно
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.id = 'randomHeroModal';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        // Добавляем информацию о случайном герое в модальное окно
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <h2>${randomHero.name}</h2>
            <img src="${randomHero.imageUrl}" alt="${randomHero.name}">
            <p>Attribute: <strong>${randomHero.attribute}</strong></p>
        `;

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Открытие модального окна
        modal.style.display = "block";

        // Закрытие модального окна при клике на кнопку закрытия
        const close = modal.querySelector('.close');
        close.addEventListener('click', function () {
            modal.style.display = "none";
        });

        // Закрытие модального окна при клике вне его области
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

