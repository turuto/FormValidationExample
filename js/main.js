class formValidator {
    constructor(form, fields, card) {
        this.form = form;
        this.fields = fields.map(item => document.querySelector(item));
        this.submit
    }

    init() {
        this.setElements();
        this.setListeners();
    }

    setElements() {
        this.submitBtn = this.form.querySelector('.form__submitBtn');
        this.errorMsgs = this.setErrorMsgs();
        this.setTwinElements();
    }

    setErrorMsgs() {
        return {
            onlyNumbers: 'Only numeric input is allowed',
            tooLong: 'This is too long'
        };
    }

    setTwinElements() {
        this.coupledElements = {};
        this.card = document.querySelector('.card');
        this.fields.forEach(field => {
            this.coupledElements[field.id] = this.card.querySelector(`[data-corresponding="${field.id}"]`);
        });
    }

    setListeners() {
        this.submitBtn.addEventListener('click', e => {
            e.preventDefault();
            this.validateForm();
        });

        this.fields.forEach(field => {
            field.addEventListener('input', e => {
                this.validateField(field);
                this.populateCard(field);
            }
            )
        })
    }

    validateField(field) {
        console.log(`validating ${field.id}`);
    }

    validateForm() {
        console.log('validate form');
        this.fields.forEach(field => this.validateField(field));
    }

    populateCard(field) {
        const twinElement = this.coupledElements[field.id];
        console.log("🚀 ~ formValidator ~ populateCard ~ twinElement", field, twinElement)

    }
}

const cardForm = document.querySelector('#cardForm');
const card = document.querySelector('card');
const fields = [
    '#cardNumber',
    '#cardHolder',
    '#expires',
    '#cvv'
]

const validator = new formValidator(cardForm, fields, 'card');
validator.init()