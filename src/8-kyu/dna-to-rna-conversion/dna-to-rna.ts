/*
 * Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
 *
 * ibonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
 * RCreate a function which translates a given DNA string into RNA.
 *
 * For example: "GCAT"  =>  "GCAU"
 *
 * The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
 * */
enum DNA {
	Guanine = "G",
	Cytosine = "C",
	Adenine = "A",
	Thymine = "T",
}

enum RNA {
	Guanine = "G",
	Cytosine = "C",
	Adenine = "A",
	Uracil = "U",
}

export function DNAtoRNA(dna: string): string {
	return dna.replaceAll(DNA.Thymine, RNA.Uracil);
}

