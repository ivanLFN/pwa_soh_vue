<template>
    <div>
        <div id="map" style="width: 100%; height: 800px"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            map: null,
            markers: [
                {
                    lat: 55.971301,
                    lng: 92.779541,
                    number: '18',
                    socket: 'Europlug(3.5 kWt)',
                    status: 'В сети, Не занят'
                },
                {
                    lat: 56.0163,
                    lng: 92.845934,
                    number: '15',
                    socket: 'Europlug(3.5 kWt)',
                    status: 'В сети, Занят'
                }
            ],
        };
    },
    mounted() {
        const apiKey = '8fcc9cb4-b55d-49f5-a4a1-0246c5ee57f6';
        const script = document.createElement('script');
        script.src = `https://maps.api.2gis.ru/2.0/loader.js?pkg=full&key=${apiKey}`;
        script.onload = this.initializeMap;
        document.getElementsByTagName('head')[0].appendChild(script);
    },
    methods: {
        /* eslint-disable no-undef */
        initializeMap() {
            DG.then(() => {
                this.map = DG.map('map', {
                    center: [56.011242, 92.856445],
                    zoom: 12,
                });
                this.markers.forEach(markerInfo => {
                    const customIcon = DG.divIcon({
                        className: 'custom-icon',
                        iconSize: [30, 30],
                        html: `
                            <div style="background-color: #1fc4c2; color: white; border-radius: 50%; width: 30px; height: 30px; text-align: center; line-height: 30px;">
                                ${markerInfo.number}
                            </div>
                            `
                        });

                    const popupContent = `
                        №${markerInfo.number}<br>
                        ${markerInfo.socket}<br>
                        ${markerInfo.status}<br>
                        <a
                            style="font-size: 1.8rem; text-decoration: none; color: #1fc4c2"
                            class="popup-link"
                            href="station?num=${markerInfo.number}"
                            data-number="${markerInfo.number}"
                            @click="getStation"
                        >
                            Выбрать
                        </a>
                    `;

                    DG.marker([markerInfo.lat, markerInfo.lng], { icon: customIcon })
                        .addTo(this.map)
                        .bindPopup(popupContent);
                    });
                });
        },
        /* eslint-enable no-undef */
         getStation() {
            const number = event.target.getAttribute('data-number');
            console.log(`Метод getStation() с номером станции ${number} сработал`);
        },
        
    },
};
</script>
